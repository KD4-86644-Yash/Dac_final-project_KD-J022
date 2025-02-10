package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.CartRespDTO;
import com.app.dto.ServicesDTO;
import com.app.entities.Cart;
import com.app.service.CartService;

//import com.app.entities.Services;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/{userId}")
    public ResponseEntity<?> getCart(@PathVariable("userId") Long userId) {
        System.out.println("Fetching Cart Items for User ID: " + userId);
        
        List<CartRespDTO> cartItems = cartService.getAllCartItems(userId);  // FIXED METHOD NAME
        
        if (cartItems.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        
        return ResponseEntity.ok(cartItems);
    }
    
    @DeleteMapping("/{userId}/{name}")
    public ResponseEntity<?> deleteCart(@PathVariable("name") String  name, @PathVariable("userId") Long userId){
    	try {
			return ResponseEntity.ok(cartService.deleteCartIten(name,userId));
		}catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ApiResponse(e.getMessage()));
		}
    }
}
