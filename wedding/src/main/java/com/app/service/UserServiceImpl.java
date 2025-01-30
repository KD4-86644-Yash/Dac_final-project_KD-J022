package com.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.UserEntity;
import com.app.repository.UserEntityRepository;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private EmailService emailService;
	@Autowired
	private UserEntityRepository uer;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	

	public UserEntity addU(UserEntity u) {
		try {
			

			String plainPassword = u.getPassword();
			log.info("pass="+plainPassword);
			

			// Encode the password before saving to the database
			u.setPassword(passwordEncoder.encode(plainPassword));
			// Prepare email content
			String subject = "Welcome to Our Platform!";
			String body = String.format(
					"Dear %s,\n\nYour account has been created successfully!\n\nEmail ID: %s\n\nPassword: %s\n\nPlease keep this information safe.",
					u.getFirstName(), u.getEmail(), plainPassword);

			// Send email
			emailService.sendEmail(u.getEmail(), subject, body);
			return uer.save(u);

		} catch (Exception e) {
			// Logging the exception (replace with your logger if applicable)
			System.err.println("Error while adding user: " + e.getMessage());

			// Rethrow the exception or return null (or handle as per your requirements)
			throw new RuntimeException("Failed to add user", e);
		}
	}

	public Optional<UserEntity> findByEmail(String email) {
		return uer.findByEmail(email);
	}

	

}
