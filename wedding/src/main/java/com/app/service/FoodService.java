package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.CartDTO;
import com.app.dto.FoodDto;
import com.app.entities.Food;

public interface FoodService {
	List<FoodDto> getAllFoodService();
	ApiResponse addFoodService(FoodDto dto);
	
	ApiResponse addFoodToCart(CartDTO dto, Long foodId, Long userId);
	
	Food getSingleFoodItem(Long serviceId);

}
