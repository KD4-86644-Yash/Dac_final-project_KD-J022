package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.VenueService;

@RestController
@RequestMapping("/services")
public class SearchController {
	
	@Autowired
	private VenueService venueService;
	
	@GetMapping("/Vanue")
	public ResponseEntity<?> viewVenue(){
		return ResponseEntity.ok(venueService.getAllVenue());
				
	}
	

}
