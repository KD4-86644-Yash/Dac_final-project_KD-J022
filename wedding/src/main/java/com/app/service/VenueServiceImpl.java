package com.app.service;

import java.util.List; 

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.CartDTO;
import com.app.dto.VenueDto;
import com.app.entities.Cart;
import com.app.entities.Mehandi;
import com.app.entities.UserEntity;
import com.app.entities.Venue;
import com.app.repository.CartRepository;
import com.app.repository.UserEntityRepository;
import com.app.repository.VenueRepository;
import com.app.responseapi.ApiResponse;

@Service
@Transactional


public class VenueServiceImpl implements VenueService  {

	
	@Autowired
	private VenueRepository venueRepository;
	
	@Autowired
	private UserEntityRepository userEntityRepository;
	
	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public List<Venue> getAllVenue() {
		
		return venueRepository.findAll();
	}

	@Override
	public ApiResponse addProduct(VenueDto dto) {
		
		Venue venue = mapper.map(dto, Venue.class);
		venueRepository.save(venue);
		return new ApiResponse("Added new Venue with id" + venue.getId());
		// TODO Auto-generated method stub
//		return null;
	}

	@Override
		public ApiResponse addMehandiServiceToCart(CartDTO cartDto, Long serviceId, Long userId) {
		
		Venue venueAddingToCart = venueRepository.findById(serviceId).orElseThrow();
		
		UserEntity user = userEntityRepository.findById(userId).orElseThrow();
		

		
		
		Cart cartObject = mapper.map(cartDto, Cart.class);
		
		cartObject.setName(venueAddingToCart.getName());
		
		cartObject.setQuantity(1);
		
		int requiredQuantity = cartObject.getQuantity();
		
		int totalPrice = requiredQuantity * venueAddingToCart.getPrice();
		
		cartObject.setService(venueAddingToCart.getId());
		
		cartObject.setPrice(totalPrice);
		
		cartObject.setUserId(user.getId());
		
		
		
		Cart savingToCart = cartRepository.save(cartObject);
		
		return new ApiResponse("Add service" + savingToCart.getName() + " having id");
	}
}
