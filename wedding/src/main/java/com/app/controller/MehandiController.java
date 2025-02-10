package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartDTO;
import com.app.dto.MehandiDto;
import com.app.entities.InvitesGift;
import com.app.entities.Mehandi;
import com.app.service.MehndiService;

@RestController
@RequestMapping("/mehandi")
@CrossOrigin

public class MehandiController {
	
	@Autowired
	private MehndiService mehndiService;
	
	
	@GetMapping
	public ResponseEntity<?> getMehndi(){
		
		List<MehandiDto> mehndi = mehndiService.getAllMehandiList();
		
		if(mehndi.isEmpty()) 
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(mehndi);
	}
	
	@PostMapping("/add-mehandi")
	public  ResponseEntity<?> addProduct(@RequestBody   MehandiDto mehandi) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(mehndiService.addMehandiService(mehandi));
	}
	
	
	@PostMapping("services/mehandi/{user-id}/{service-id}")
	public ResponseEntity<?> addToCart(@RequestBody CartDTO cartDto,@PathVariable ("service-id") Long id,@PathVariable ("user-id") Long userId){
		
		
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(mehndiService.addMehandiServiceToCart(cartDto, id,userId));
	}
	
	@GetMapping("services/mehandi/{user-id}/{service-id}")
	public ResponseEntity<?> getSingleInvitationObject(@PathVariable ("service-id") Long id){
		Mehandi mehandiObject = mehndiService.getSingleMehandiRecord(id);
		return ResponseEntity.ok(mehandiObject);
	}

}
