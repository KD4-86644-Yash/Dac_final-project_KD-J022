package com.app.service;

import java.util.List; 
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.CartDTO;
import com.app.dto.MehandiDto;
import com.app.entities.Cart;
import com.app.entities.InvitesGift;
import com.app.entities.Mehandi;
import com.app.entities.UserEntity;
import com.app.repository.CartRepository;
import com.app.repository.MehandiRepository;
import com.app.repository.UserEntityRepository;
import com.app.responseapi.ApiResponse;

@Service
@Transactional

public class MehndiServiceImpl  implements MehndiService{
	
	@Autowired
	private MehandiRepository mehandiRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserEntityRepository userEntityRepository;
	
	
	@Autowired
	private CartRepository cartRepository;
	
	

	@Override
	public List<MehandiDto> getAllMehandiList() {
		
		return mehandiRepository.findAll()
				.stream()
				.map(mehandi -> mapper.map(mehandi, MehandiDto.class))
				.collect(Collectors.toList());
	}



	@Override
	public ApiResponse addMehandiService(MehandiDto mehandi,Long vendorId) {
		
		Mehandi newMehandi = mapper.map(mehandi, Mehandi.class);
		
		UserEntity user = userEntityRepository.findById(vendorId).orElseThrow();
		
		if(user!=null) {
		
			newMehandi.setUserEntity(user);
		Mehandi persistentEntity =  mehandiRepository.save(newMehandi);
		return new ApiResponse("Added new Mehandi Service with ID " + persistentEntity.getId());
		}
		else 
			return new ApiResponse("Cannot add service" );
	}
	
	
	
	@Override
	public ApiResponse addMehandiServiceToCart(CartDTO cartDto,Long id,Long userId) {
		
		Mehandi mehandiAddingToCart = mehandiRepository.findById(id).orElseThrow();
		
		UserEntity user = userEntityRepository.findById(userId).orElseThrow();
		

		
		
		Cart cartObject = mapper.map(cartDto, Cart.class);
		
		cartObject.setName(mehandiAddingToCart.getName());
		
		cartObject.setQuantity(cartDto.getQuantity());
		
		int requiredQuantity = cartObject.getQuantity();
		
		int totalPrice = requiredQuantity * mehandiAddingToCart.getPrice();
		
		cartObject.setService(mehandiAddingToCart.getId());
		
		cartObject.setPrice(totalPrice);
		
		cartObject.setUserId(user.getId());
		
		
		
		Cart savingToCart = cartRepository.save(cartObject);
		
		return new ApiResponse("Add service" + savingToCart.getName() + " having id" );
	}



	@Override
	public Mehandi getSingleMehandiRecord(Long serviceId) {
		
		Mehandi mehandiObject = mehandiRepository.findById(serviceId).orElseThrow();
		
		Mehandi anotherObject = new Mehandi();
		
		anotherObject.setName(mehandiObject.getName());
		anotherObject.setCity(mehandiObject.getCity());
		anotherObject.setDiscription(mehandiObject.getDiscription());
		anotherObject.setPrice(mehandiObject.getPrice());
		anotherObject.setRating(mehandiObject.getRating());
		
		 
		return  anotherObject;
	}
	
	
	
	

}
