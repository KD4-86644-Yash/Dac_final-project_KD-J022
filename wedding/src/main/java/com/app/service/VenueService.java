package com.app.service;

import java.util.List;

import com.app.dto.VenueDto;
import com.app.entities.Vanue;
import com.app.responseapi.ApiResponse;

//import antlr.collections.List;

public interface VenueService {
	List<Vanue> getAllVenue();
	ApiResponse addProduct(VenueDto dto);
	
}
