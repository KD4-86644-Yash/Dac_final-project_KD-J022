package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.CartDTO;
import com.app.dto.DecorationDto;
import com.app.dto.VenueDto;

//import antlr.collections.List;

public interface DecorationService {

	List<DecorationDto> getAllDecoration();
	ApiResponse addDecorationService(DecorationDto dto);
	
	ApiResponse addDecorationToCart(CartDTO dto, Long decorationId, Long userId);
	

}
