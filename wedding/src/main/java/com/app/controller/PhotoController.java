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
import com.app.dto.PhotoDto;
import com.app.entities.InvitesGift;
import com.app.entities.Photo;
import com.app.service.PhotoService;


@RestController
@RequestMapping("/services/photo")
@CrossOrigin(origins  = "*")
public class PhotoController {
	
	@Autowired
	private PhotoService photoservice;
	
	@GetMapping("/get")
	public ResponseEntity<?> getPhoto(){
		List<PhotoDto> photodto = photoservice.getAllPhoto();
		
		return ResponseEntity.ok(photodto);
	}
	
	@PostMapping("/add-photo/{vendorId}")
	public ResponseEntity<?> addSound(@RequestBody PhotoDto photodto,@PathVariable Long vendorId){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(photoservice.addPhotoService(photodto,vendorId));
	}
	
	@PostMapping("/cart/{vendorId}/{userId}")
	public ResponseEntity<?> addCart(@RequestBody CartDTO photodto, @PathVariable("vendorId") Long vendorId, @PathVariable("userId") Long userId){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(photoservice.addPhotoServiceToCart(photodto, vendorId,userId));
	}
	
	@GetMapping("photo-single/{userId}/{serviceId}")
	public ResponseEntity<?> getSingleInvitationObject(
	    @PathVariable("serviceId") Long id
	) {
	    Photo inviteObject = photoservice.getSinglePhotoRecord(id);
	    return ResponseEntity.ok(inviteObject);
	}


}
