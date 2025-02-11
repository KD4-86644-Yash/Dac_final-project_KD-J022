package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.UserEntity;

import com.app.service.UserServices;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/profile")
@CrossOrigin("*") // Allow React frontend
public class UserController {
	
	@Autowired
	private UserServices user;
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getSingleInvitationObject(@PathVariable ("userId") Long id){
		UserEntity mehandiObject = user.getSingleUser(id);
		return ResponseEntity.ok(mehandiObject);
	}

}
