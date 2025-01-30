package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ServicesDTO;
import com.app.service.CartService;

//import com.app.entities.Services;


@RestController
@RequestMapping("/cart")
public class CartController {
	
//	@Autowired
//	private CartService services;
//	
//	@GetMapping
//	public ResponseEntity<?> getCart(){
//		System.out.println("Cart items");
//		List<ServicesDTO> cartItem = services.getAllCarttems();
//		if(cartItem.isEmpty()) {
//			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
//		}
//		return ResponseEntity.ok(cartItem);
//	}

}
