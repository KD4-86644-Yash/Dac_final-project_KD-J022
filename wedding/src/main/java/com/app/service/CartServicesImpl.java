package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.CartRespDTO;
import com.app.dto.ServicesDTO;
import com.app.dto.SoundReqDTO;
import com.app.entities.Cart;
import com.app.entities.Services;
import com.app.repository.CartRepository;
import com.app.responseapi.ApiResponse;

@Service
@Transactional
public class CartServicesImpl implements CartService {

	@Autowired
    private CartRepository cartRepository;

    @Autowired
    private ModelMapper mapper;

        @Override
        public List<CartRespDTO> getAllCartItems(Long userId) {
        	List<Cart> cartList = cartRepository.findByUserId(userId); // Fetch entity
        	return cartList.stream()
        			.map(cart -> mapper.map(cart, CartRespDTO.class)) // Convert entity to DTO
        			.collect(Collectors.toList());
	}

		@Override
		public ApiResponse deleteCartIten(String name, Long userId) {
//			System.out.println("Delete product with id = "+productId);
			List<Cart> cartList = cartRepository.findByUserId(userId);
			Optional<Cart> cartItemToRemove = cartList.stream()
		            .filter(cart -> cart.getName().equalsIgnoreCase(name))
		            .findFirst();

		    if (cartItemToRemove.isPresent()) {
		        cartRepository.delete(cartItemToRemove.get()); // Remove the item from the database
		        return new ApiResponse("Item '" + name + "' removed successfully");
		    } else {
		        return new ApiResponse("Item '" + name + "' not found in cart");
		    }
		}
}
