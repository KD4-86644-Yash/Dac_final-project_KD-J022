package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ApiResponse;
import com.app.dto.CartDTO;
import com.app.dto.MakeUpDto;
import com.app.entities.Cart;
import com.app.entities.MakeUp;
import com.app.entities.UserEntity;
import com.app.repository.CartRepository;

import com.app.repository.MakeupRepository;
//import com.app.repository.MakeUpRepository;
import com.app.repository.UserEntityRepository;

@Service
@Transactional
public class MakeUpServiceImpl implements MakeUpService {
	
	@Autowired
	private MakeupRepository makeUpRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserEntityRepository userEntityRepository;
	
	@Autowired
	private CartRepository cartRepository;
	
	@Override
	public List<MakeUpDto> getAllMakeUp() {
		
		return makeUpRepository.findAll()
				.stream()
				.map(makeup -> mapper.map(makeup, MakeUpDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse addMakeUpService(MakeUpDto dto,Long vendorId) {
		MakeUp makeup = mapper.map(dto, MakeUp.class);
		
		UserEntity user = userEntityRepository.findById(vendorId).orElseThrow();
		if(user!=null) {
			makeup.setUserEntity(user);
			MakeUp persistentEntity = makeUpRepository.save(makeup);
			return new ApiResponse("Added new makeup with Id" + persistentEntity.getId());
		}
		else {
			return new ApiResponse("cannot add service");
		}
				
	}

	@Override
	public ApiResponse deleteMakeUpService() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ApiResponse addMakeUpToCart(CartDTO dto, Long makeUpId, Long userId) {
		
		MakeUp makeUp = makeUpRepository.findById(makeUpId).orElseThrow();
		Cart cartObject = mapper.map(dto, Cart.class);
		cartObject.setName(makeUp.getName());
		
		if(makeUp.getType().equalsIgnoreCase("Family MakeUp")) {
			cartObject.setQuantity(dto.getQuantity());
		}
		else {
			cartObject.setQuantity(1);
		}
		int totalPrice = cartObject.getQuantity() * makeUp.getPrice();
		cartObject.setPrice(totalPrice);
		cartObject.setService(makeUpId);
		cartObject.setUserId(userId);
	
		Cart saveToCart = cartRepository.save(cartObject);
		// TODO Auto-generated method stub
		return new ApiResponse("MakeUp servie added to the cart successfully!!");
		
	}

}
