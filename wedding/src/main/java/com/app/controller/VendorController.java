package com.app.controller;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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
	

	@DeleteMapping("/soundServicedelete/{soundId}/{vendorId}")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<SoundApiResponce> deleteVenue(@PathVariable("soundId") Long soundId,
			@PathVariable("vendorId") Long vendorId) {
		log.error(" delete AllSound controller");
		ResponseEntity<SoundApiResponce> responceEntity = new ResponseEntity<>(
				vendorService.deleteSound(soundId, vendorId), HttpStatus.OK);
		return responceEntity;
	}

	@DeleteMapping("/FoodServicedelete/{foodId}/{vendorId}")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<FoodApiResponce> deleteFood(@PathVariable("foodId") Long foodId,
			@PathVariable("vendorId") Long vendorId) {
		log.error(" deleteAllFood controller");
		ResponseEntity<FoodApiResponce> responceEntity = new ResponseEntity<>(vendorService.deleteFood(foodId, vendorId),
				HttpStatus.OK);
		return responceEntity;
	}

	@DeleteMapping("/InvitesGiftsServicedelete/{invitesGiftsId}/{vendorId}")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<InvitesGiftsApiResponce> deleteInvitesGifts(@PathVariable("invitesGiftsId") Long invitesGiftsId,
			@PathVariable("vendorId") Long vendorId) {
		log.error(" deleteAllInvites controller");
		ResponseEntity<InvitesGiftsApiResponce> responceEntity = new ResponseEntity<>(
				vendorService.deleteInvitesGifts(invitesGiftsId, vendorId), HttpStatus.OK);
		return responceEntity;
	}

	@DeleteMapping("/DecorationServicedelete/{decorationId}/{vendorId}")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<DecorationApiResponce> deleteDecoration(@PathVariable("decorationId") Long decorationId,
			@PathVariable("vendorId") Long vendorId) {
		log.error(" deleteAllDecoration controller");
		ResponseEntity<DecorationApiResponce> responceEntity = new ResponseEntity<>(
				vendorService.deleteDecoration(decorationId, vendorId), HttpStatus.OK);
		return responceEntity;
	}

	@DeleteMapping("/MakeUpDtoServicedelete/{makeUpId}/{vendorId}")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<MakeUpApiResponce> deleteMakeUp(@PathVariable("makeUpId") Long makeUpId,
			@PathVariable("vendorId") Long vendorId) {
		log.error(" addAllMakeUp controller");
		ResponseEntity<MakeUpApiResponce> responceEntity = new ResponseEntity<>(
				vendorService.deleteMakeUp(makeUpId, vendorId), HttpStatus.OK);
		return responceEntity;
	}

	@DeleteMapping("/PhotoServicedelete/{photoId}/{vendorId}")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<PhotoApiResponce> deletePhoto(@PathVariable("photoId") Long photoId,
			@PathVariable("vendorId") Long vendorId) {
		log.error(" addAllPhoto controller");
		ResponseEntity<PhotoApiResponce> responceEntity = new ResponseEntity<>(
				vendorService.deletePhoto(photoId, vendorId), HttpStatus.OK);
		return responceEntity;
	}
	@GetMapping("/download-excel/{vendor_id}")
	public ResponseEntity<byte[]> downloadExcel(	@PathVariable("vendor_id") Long vendor_id) {
		log.info("download-excel endpoint called");
		ByteArrayInputStream excelStream = vendorService.downloadExcel(vendor_id);
		try {
			byte[] bytes = new byte[excelStream.available()];
			excelStream.read(bytes);
			HttpHeaders headers = new HttpHeaders();
			headers.add("Content-Disposition", "attachment; filename=TransactionsDetails.xlsx");
			return ResponseEntity.ok().headers(headers).body(bytes);
		} catch (IOException e) {
			log.error("Error while reading Excel stream: {}", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
}
