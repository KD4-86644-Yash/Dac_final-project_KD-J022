package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PhotoDto;
import com.app.service.PhotoService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/photo")
public class PhotoController {
	
	@Autowired
	private PhotoService photoservice;
	
	@GetMapping("/get")
	public ResponseEntity<?> getPhoto(){
		List<PhotoDto> photodto = photoservice.getAllPhoto();
		
		return ResponseEntity.ok(photodto);
	}
	
	@PostMapping("/photo/add")
	public ResponseEntity<?> addSound(@RequestBody PhotoDto photodto){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(photoservice.addPhotoService(photodto));
	}

}
