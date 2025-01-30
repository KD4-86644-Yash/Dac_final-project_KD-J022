package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.DecorationService;

@RestController
@RequestMapping("/service")
public class DecorationController {
	@Autowired
	private DecorationService decorationService;
	
	
	@GetMapping("/Decoration")
	public ResponseEntity<?> viewAllDecoration(){
		return ResponseEntity.ok(decorationService.getAllDecoration());
	}
}
