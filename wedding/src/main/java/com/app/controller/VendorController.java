package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DecorationDto;
import com.app.dto.FoodDto;
import com.app.dto.InvitesGiftDto;
import com.app.dto.MakeUpDto;
import com.app.dto.PhotoDto;
import com.app.dto.ServicesDTO;
import com.app.dto.SoundDto;
import com.app.dto.SoundReqDTO;
import com.app.dto.VenueDto;
import com.app.responseapi.DecorationApiResponce;
import com.app.responseapi.FoodApiResponce;
import com.app.responseapi.InvitesGiftsApiResponce;
import com.app.responseapi.MakeUpApiResponce;
import com.app.responseapi.PhotoApiResponce;
import com.app.responseapi.SoundApiResponce;
import com.app.responseapi.VenueApiResponce;
import com.app.service.VendorService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/vendor_services")
@CrossOrigin("*") // Allow React frontend
public class VendorController {
	@Autowired
	public VendorService vendorService;
	
	@GetMapping("/get/{vendorId}")
	public ResponseEntity<?> getAllServices(@PathVariable Long vendorId){
		ServicesDTO servicedto = vendorService.getAllServices(vendorId);
		return ResponseEntity.ok(servicedto);	
	}

	@PostMapping("/Venueadd/{vendorId}")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<VenueApiResponce> addVenue(@RequestBody VenueDto venueDto,
			@PathVariable("vendorId") Long vendorId) {
		log.error(" addAllVenue controller");
		ResponseEntity<VenueApiResponce> responceEntity = new ResponseEntity<>(
				vendorService.addVenue(venueDto, vendorId), HttpStatus.OK);
		return responceEntity;
	}

	@PostMapping("/soundServiceadd/{vendorId}")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<SoundApiResponce> addVenue(@RequestBody SoundDto soundDto,
			@PathVariable("vendorId") Long vendorId) {
		log.error(" addAllSound controller");
		ResponseEntity<SoundApiResponce> responceEntity = new ResponseEntity<>(
				vendorService.addSound(soundDto, vendorId), HttpStatus.OK);
		return responceEntity;
	}

	@PostMapping("/FoodServiceadd/{vendorId}")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<FoodApiResponce> addFood(@RequestBody FoodDto foodDto,
			@PathVariable("vendorId") Long vendorId) {
		log.error(" addAllFood controller");
		ResponseEntity<FoodApiResponce> responceEntity = new ResponseEntity<>(vendorService.addFood(foodDto, vendorId),
				HttpStatus.OK);
		return responceEntity;
	}

	@PostMapping("/InvitesGiftsServiceadd/{vendorId}")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<InvitesGiftsApiResponce> addInvitesGifts(@RequestBody InvitesGiftDto invitesGiftsDto,
			@PathVariable("vendorId") Long vendorId) {
		log.error(" addAllInvites controller");
		ResponseEntity<InvitesGiftsApiResponce> responceEntity = new ResponseEntity<>(
				vendorService.addInvitesGifts(invitesGiftsDto, vendorId), HttpStatus.OK);
		return responceEntity;
	}

	@PostMapping("/DecorationServiceadd/{vendorId}")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<DecorationApiResponce> addDecoration(@RequestBody DecorationDto decorationDto,
			@PathVariable("vendorId") Long vendorId) {
		log.error(" addAllDecoration controller");
		ResponseEntity<DecorationApiResponce> responceEntity = new ResponseEntity<>(
				vendorService.addDecoration(decorationDto, vendorId), HttpStatus.OK);
		return responceEntity;
	}

	@PostMapping("/MakeUpDtoServiceadd/{vendorId}")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<MakeUpApiResponce> addMakeUp(@RequestBody MakeUpDto makeUpDto,
			@PathVariable("vendorId") Long vendorId) {
		log.error(" addAllMakeUp controller");
		ResponseEntity<MakeUpApiResponce> responceEntity = new ResponseEntity<>(
				vendorService.addMakeUp(makeUpDto, vendorId), HttpStatus.OK);
		return responceEntity;
	}

	@PostMapping("/PhotoServiceadd/{vendorId}")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<PhotoApiResponce> addPhoto(@RequestBody PhotoDto photoDto,
			@PathVariable("vendorId") Long vendorId) {
		log.error(" addAllPhoto controller");
		ResponseEntity<PhotoApiResponce> responceEntity = new ResponseEntity<>(
				vendorService.addPhoto(photoDto, vendorId), HttpStatus.OK);
		return responceEntity;
	}

	@DeleteMapping("/DeleteVenue/{vanueId}/{vendor_id}")
//	@PreAuthorize("hasAuthority('ROLE_Admin')")
	public ResponseEntity<VenueApiResponce> deleteVenueById(@PathVariable("vanueId") Long vanueId,
			@PathVariable("vendor_id") Long vendor_id) {
		log.info(" deleteVenueById controller");
		ResponseEntity<VenueApiResponce> responceEntity = new ResponseEntity<>(
				vendorService.deleteVenueById(vanueId, vendor_id), HttpStatus.OK);
		return responceEntity;
	}
	
}
