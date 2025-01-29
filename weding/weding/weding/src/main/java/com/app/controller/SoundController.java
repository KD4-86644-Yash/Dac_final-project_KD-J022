package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SoundDto;
import com.app.responseapi.SoundApiResponce;
import com.app.service.SoundService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/sound_services")
public class SoundController {

	
	@Autowired
	public SoundService soundService;
	
	
	@PostMapping("/soundServiceadd")
//	@PreAuthorize("hasAuthority('ROLE_Vendor')")
	public ResponseEntity<SoundApiResponce> addVenue(@RequestBody SoundDto soundDto){
		log.error(" addAllVenue controller");
		ResponseEntity<SoundApiResponce> responceEntity = new ResponseEntity<>(
				soundService.addSound(soundDto),HttpStatus.OK);
				return responceEntity;
	}
	
}
