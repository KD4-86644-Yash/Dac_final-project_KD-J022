package com.app.controller;

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
import com.app.dto.MakeUpDto;
import com.app.service.MakeUpService;




@RestController
@RequestMapping("/services/makeup-service")
@CrossOrigin("*")
public class MakeUpController {
	@Autowired
	private MakeUpService makeUpService;
	
	@GetMapping("/get")
	public ResponseEntity<?> viewAllMakeUp(){
		return ResponseEntity.ok(makeUpService.getAllMakeUp());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addMakeUp(@RequestBody MakeUpDto makeup){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(makeUpService.addMakeUpService(makeup));
	}
	
	@PostMapping("/addToCart/{makeUpId}/{userId}")
	public ResponseEntity<?> addMakeUpToCart(@RequestBody CartDTO dto, @PathVariable Long makeUpId, Long userId){
		return ResponseEntity.status(HttpStatus.CREATED).body(makeUpService.addMakeUpToCart(dto, makeUpId, userId));
		
	}
	
}
