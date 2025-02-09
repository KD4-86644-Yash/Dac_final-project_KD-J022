package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartDTO;
import com.app.service.DecorationService;
import com.app.service.VenueService;

@RestController
@RequestMapping("/services")
public class VenueController {
	
	@Autowired
	private VenueService venueService;	
	
	@GetMapping("/Venue")
	public ResponseEntity<?> viewAllVenue(){
		return ResponseEntity.ok(venueService.getAllVenue());
	}
	
	@PostMapping("venue/{user-id}/{service-id}")
	public ResponseEntity<?> addToCart(@RequestBody CartDTO cartDto,@PathVariable ("service-id") Long id,@PathVariable ("user-id") Long userId){
		
		
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(venueService.addVenueServiceToCart(cartDto, id, userId));
	}
	
	
	

}
