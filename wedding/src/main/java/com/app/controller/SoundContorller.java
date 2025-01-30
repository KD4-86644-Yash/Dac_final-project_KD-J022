package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SoundDto;
import com.app.service.SoundServices;

@RestController
@RequestMapping
public class SoundContorller {
	
	@Autowired
	private SoundServices soundservice;
	
	@GetMapping
	public ResponseEntity<?> getAllSound(){
		
		List<SoundDto> sounddto = soundservice.getAllSound();
		
		
		
		return ResponseEntity.ok(sounddto);	
	}
	

}
