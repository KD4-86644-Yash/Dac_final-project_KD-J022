package com.app.service;

import java.util.List;

import com.app.dto.CartDTO;
import com.app.dto.VenueDto;
import com.app.entities.Mehandi;
import com.app.entities.Venue;
import com.app.responseapi.ApiResponse;

public interface VenueService {
	
	List<Venue> getAllVenue();
	ApiResponse addProduct(VenueDto dto);
	
	Venue getSingleMehandiRecord(Long serviceId);
	ApiResponse addVenueServiceToCart(CartDTO cartDto,Long serviceId, Long UserId);

}
