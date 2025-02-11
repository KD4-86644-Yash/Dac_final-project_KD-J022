package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartDTO;
import com.app.dto.SoundDto;
import com.app.dto.SoundReqDTO;
import com.app.dto.SoundUpdateDTO;
import com.app.service.SoundServices;


@RestController
@RequestMapping("services/sound-system-service")
@CrossOrigin(origins  = "*")
public class SoundContorller {
	
	@Autowired
	private SoundServices soundservice;
	
	@GetMapping("/get")
	public ResponseEntity<?> getAllSound(){
		List<SoundReqDTO> sounddto = soundservice.getAllSound();
		return ResponseEntity.ok(sounddto);	
	}
	
	@PostMapping("/add/{vendorId}")
	public ResponseEntity<?> addSound(@RequestBody SoundDto sounddto,@PathVariable Long vendorId){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(soundservice.addSoundService(sounddto,vendorId));
		
	}
	
	@PostMapping("/cart/{vendorId}/{userId}")
	public ResponseEntity<?> addCart(@RequestBody CartDTO photodto, @PathVariable("vendorId") Long vendorId, @PathVariable("userId") Long userId){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(soundservice.addSoundServiceToCart(photodto, vendorId,userId));
	}
	

}
