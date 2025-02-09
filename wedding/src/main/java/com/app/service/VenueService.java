package com.app.service;

import java.util.List;

import com.app.dto.CartDTO;
import com.app.dto.VenueDto;
import com.app.entities.Venue;
import com.app.responseapi.ApiResponse;

//import antlr.collections.List;

public interface VenueService {
	List<Venue> getAllVenue();
	ApiResponse addProduct(VenueDto dto);
	
	
	ApiResponse addMehandiServiceToCart(CartDTO cartDto,Long serviceId, Long UserId);
	
}
