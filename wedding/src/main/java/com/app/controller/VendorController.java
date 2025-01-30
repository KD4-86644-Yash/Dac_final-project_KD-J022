package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SoundDto;
import com.app.dto.VenueDto;
//import com.app.responseapi.SoundApiResponce;
import com.app.responseapi.VenueApiResponce;
import com.app.service.VendorService;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@RestController
@RequestMapping("/vendor_services")
public class VendorController {
	@Autowired
	public VendorService vendorService;
	
	
	@PostMapping("/Venueadd/{vendorId}")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<?> addVenue(@RequestBody VenueDto venueDto,@PathVariable("vendorId") Long vendorId ){
		log.error(" addAllVenue controller");
		ResponseEntity<VenueApiResponce> responceEntity = new ResponseEntity<>(
				vendorService.addVenue(venueDto, vendorId),HttpStatus.OK);
				return responceEntity;
	}
	
	
//	@PostMapping("/soundServiceadd")
////	@PreAuthorize("hasAuthority('ROLE_Vendor')")
//	public ResponseEntity<SoundApiResponce> addVenue(@RequestBody SoundDto soundDto){
//		log.error(" addAllVenue controller");
//		ResponseEntity<SoundApiResponce> responceEntity = new ResponseEntity<>(
//				vendorService.addSound(soundDto),HttpStatus.OK);
//				return responceEntity;
//	}
	
	
}
