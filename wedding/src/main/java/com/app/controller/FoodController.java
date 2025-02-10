package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartDTO;
import com.app.dto.FoodDto;
import com.app.service.FoodService;

@RestController
@RequestMapping("/services/food")
@CrossOrigin(origins = "*")
public class FoodController {
	
	@Autowired
	private FoodService foodService;
	
	@GetMapping("/get")
	public ResponseEntity<?> getAllFoodList(){
		return ResponseEntity.ok(foodService.getAllFoodService());
	}
	
	@PostMapping("/addFood")
	public ResponseEntity<?> addFoodService(@RequestBody FoodDto dto){
		return ResponseEntity.status(HttpStatus.CREATED).body(foodService.addFoodService(dto));
	}
	
	@PostMapping("/addFoodTocart/{id}/{userId}")
	public ResponseEntity<?> addFoodServiceToCart(@RequestBody CartDTO dto, Long id, Long userId){		
		return ResponseEntity.status(HttpStatus.CREATED).body(foodService.addFoodToCart(dto, id, userId));
	}

	@GetMapping("food/getDetail/{userId}/{serviceId}")
	public ResponseEntity<?> viewFood(@PathVariable("serviceId") Long id){
		
		return ResponseEntity.ok(foodService.getSingleFoodItem(id));
//		return ResponseEntity.ok(foodService.getSingleFoodItem(serviceId));
	}
}
