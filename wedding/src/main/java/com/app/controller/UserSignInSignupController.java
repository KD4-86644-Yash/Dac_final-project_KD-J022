package com.app.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SigninRequest;
import com.app.dto.SigninResponse;
import com.app.entities.UserEntity;
import com.app.repository.UserEntityRepository;
import com.app.security.CustomUserDetails;
import com.app.security.JwtUtils;
import com.app.service.UserService;

@RestController
@RequestMapping("/users")
public class UserSignInSignupController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	private AuthenticationManager authMgr;
	
	@Autowired
	public UserEntityRepository userEntityRepository;


	/*
	 * URL - http://host:port/users/signin Method - POST request payload : Auth req
	 * DTO : email n password resp payload : In case of success : Auth Resp DTO :
	 * mesg + JWT token + SC 201 In case of failure : SC 401
	 * 
	 */
//	@PostMapping("/signin")
//	public ResponseEntity<?> authenticateUser(@RequestBody 
//			@Valid SigninRequest request) {
//		System.out.println("in sign in" + request);
//		//create a token to store un verified user email n pwd
//		UsernamePasswordAuthenticationToken token=new 
//				UsernamePasswordAuthenticationToken(request.getEmail(), 
//						request.getPassword());
//		//invoke auth mgr's authenticate method;
//		Authentication verifiedToken = authMgr.authenticate(token);
//		SecurityContextHolder.getContext().setAuthentication(verifiedToken);
//		//=> auth successful !
//		System.out.println(verifiedToken.getPrincipal().getClass());//custom user details object
//		//create JWT n send it to the clnt in response
//		SigninResponse resp=new SigninResponse
//				(jwtUtils.generateJwtToken(verifiedToken),
//				"Successful Auth!!!!");
//		return ResponseEntity.
//				status(HttpStatus.CREATED).body(resp);
//	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody @Valid SigninRequest request) {
	    System.out.println("In sign in: " + request);

	    // Create an authentication token for the user
	    UsernamePasswordAuthenticationToken token = 
	        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword());

	    // Authenticate the user using the Authentication Manager
	    Authentication verifiedToken = authMgr.authenticate(token);
	    SecurityContextHolder.getContext().setAuthentication(verifiedToken);

	    // Auth successful!
	    System.out.println(verifiedToken.getPrincipal().getClass()); // Custom user details object

	    // Retrieve the authenticated user data from the custom user details or database
	    CustomUserDetails customUserDetails = (CustomUserDetails) verifiedToken.getPrincipal();
	    String email = customUserDetails.getUsername();  // Email of the user

	    // Retrieve user data from the database (assuming you have a UserRepository or similar)
	    Optional<UserEntity> userOptional = userEntityRepository.findByEmail(email);
	    
	    if (!userOptional.isPresent()) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
	    }

	    UserEntity user = userOptional.get();

	    // ✅ Ensure Enum Role is sent correctly
	    SigninResponse resp = new SigninResponse(
	        jwtUtils.generateJwtToken(verifiedToken),
	        "Successful Auth!",
	        user.getId(),
	        user.getFirstName(),
	        user.getLastName(),
	        user.getEmail(),
	        user.getRole()  // ✅ Send Enum Role
	    );

	    return ResponseEntity.status(HttpStatus.CREATED).body(resp);
	}
	
	@PostMapping("/signup")
	public  ResponseEntity<?> addUser(@RequestBody UserEntity u) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(userService.addU(u));
	}

}
