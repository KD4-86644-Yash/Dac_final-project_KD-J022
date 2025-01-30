package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SoundDto;
import com.app.service.SoundServices;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping
public class SoundContorller {
	
	@Autowired
	private SoundServices soundservice;
	
	@GetMapping("/sound-system")
	public ResponseEntity<?> getAllSound(){
		List<SoundDto> sounddto = soundservice.getAllSound();
		return ResponseEntity.ok(sounddto);	
	}
	
//	@PostMapping("/sound-system/add")
//	public ResponseEntity<?> addSound(@RequestBody SoundDto sounddto){
//		
//		return ResponseEntity.status(HttpStatus.CREATED).body(soundservice.addSoundService(sounddto));
//		
//	}
	

}
