package com.app.service;

import java.util.List;

import com.app.dto.CartDTO;
import com.app.dto.VenueDto;
import com.app.entities.Venue;
import com.app.responseapi.ApiResponse;

public interface VenueService {
	
	List<Venue> getAllVenue();
	ApiResponse addProduct(VenueDto dto);
	
	
	ApiResponse addVenueServiceToCart(CartDTO cartDto,Long serviceId, Long UserId);

}
