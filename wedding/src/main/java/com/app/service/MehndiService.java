package com.app.service;

import java.util.List;

import com.app.dto.CartDTO;
import com.app.dto.MehandiDto;
import com.app.responseapi.ApiResponse;

public interface MehndiService {
	
		List<MehandiDto> getAllMehandiList();
		
		ApiResponse addMehandiService(MehandiDto mehandi);
		
		ApiResponse softDeleteMehandiService();
		
		ApiResponse addMehandiServiceToCart(CartDTO cartDto,Long serviceId, Long UserId);
		
		

}
