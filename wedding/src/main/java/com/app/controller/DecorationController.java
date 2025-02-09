package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DecorationDto;
import com.app.service.DecorationService;

@RestController
@RequestMapping("/service")
@CrossOrigin
public class DecorationController {
	@Autowired
	private DecorationService decorationService;
	
	
	@GetMapping("/Decoration")
	public ResponseEntity<?> viewAllDecoration(){
		return ResponseEntity.ok(decorationService.getAllDecoration());
	}
	
	
	@PostMapping("/addDecoration")
	public ResponseEntity<?> addDecoration(@RequestBody DecorationDto decoration){
		return ResponseEntity.status(HttpStatus.CREATED).body(decorationService.addDecorationService(decoration));
	}
	
//	@DeleteMapping(/delete)
}
