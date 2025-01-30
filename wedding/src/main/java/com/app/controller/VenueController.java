package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	
	
	

}
