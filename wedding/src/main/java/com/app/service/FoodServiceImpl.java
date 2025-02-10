package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ApiResponse;
import com.app.dto.CartDTO;
import com.app.dto.FoodDto;
import com.app.dto.MakeUpDto;
import com.app.entities.Cart;
import com.app.entities.Food;
import com.app.entities.MakeUp;
import com.app.entities.UserEntity;
import com.app.repository.CartRepository;
import com.app.repository.FoodRepository;
import com.app.repository.UserEntityRepository;


@Service
@Transactional
public class FoodServiceImpl implements FoodService {
	
	@Autowired
	private FoodRepository foodRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserEntityRepository userEntityRepository;
	
	@Autowired
	private CartRepository cartRepository;

	@Override
	public List<FoodDto> getAllFoodService() {
			
		return foodRepository.findAll()
				.stream()
				.map(food -> mapper.map(food, FoodDto.class))
				.collect(Collectors.toList());
	}


	
	@Override
	public ApiResponse addFoodService(FoodDto dto) {
		Food food = mapper.map(dto, Food.class);
		
		String emailValidation =  dto.getVendorEmail();
		UserEntity vendorObject = userEntityRepository.findByEmail(emailValidation).orElseThrow();
		if(vendorObject.getEmail().equalsIgnoreCase(emailValidation)) {
			food.setUserEntity(vendorObject);
			Food persistentEntity = foodRepository.save(food);
			return new ApiResponse("Added new Food service with ID" + persistentEntity.getId());
		}
		else {
			return new ApiResponse("Cannot add service");
		}
	}



	@Override
	public ApiResponse addFoodToCart(CartDTO dto, Long foodId, Long userId) {
		Food food = foodRepository.findById(foodId).orElseThrow();
		
		Cart cartObject = mapper.map(dto, Cart.class);
		
		cartObject.setName(food.getName());
		cartObject.setQuantity(dto.getQuantity());
		int totalPrice = cartObject.getQuantity() * food.getPrice();
		
		cartObject.setPrice(totalPrice);
		cartObject.setService(foodId);
		cartObject.setUserId(userId);
		 Cart saveToCart = cartRepository.save(cartObject);
		
		// TODO Auto-generated method stub
		return new ApiResponse("Food service successfully added to the cart !!");
	}
	
	
	
	

}
