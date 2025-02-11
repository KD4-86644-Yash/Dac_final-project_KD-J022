package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.CartDTO;
import com.app.dto.SoundDto;
import com.app.dto.SoundReqDTO;
import com.app.dto.SoundUpdateDTO;
import com.app.entities.Cart;
import com.app.entities.Photo;
import com.app.entities.Services;
import com.app.entities.Sound;
import com.app.entities.UserEntity;
import com.app.repository.CartRepository;
import com.app.repository.ServiceRepository;
import com.app.repository.SoundRepository;
import com.app.repository.UserEntityRepository;
import com.app.responseapi.ApiResponse;

@Service
@Transactional
public class SoundServiceImpl implements SoundServices {

	@Autowired
	private SoundRepository sound;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private UserEntityRepository userRepository;
	
	@Autowired
	private ServiceRepository serviceRepository;
	
	@Override
	public List<SoundReqDTO> getAllSound() {
		return sound.findAll().stream()
				.map(sound -> mapper
				.map(sound, SoundReqDTO.class))
				.collect(Collectors.toList());
	}
	
	@Override
	public List<SoundReqDTO> getbyId(Long vandor_id) {
		return sound.findByUserEntityId(vandor_id).stream()
				.map(sound -> mapper
				.map(sound, SoundReqDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse addSoundService(SoundDto sounddto,Long vendorId) {
	Sound newSound = mapper.map(sounddto, Sound.class);
		
//		String email = sounddto.getUserEntity();
		UserEntity user = userRepository.findById(vendorId).orElseThrow();
		
		if(user!=null) {
			
			newSound.setUserEntity(user);
			Sound persistUser =  sound.save(newSound);
			return new ApiResponse("Added New Service With Id:"+ persistUser.getId());
		}
		else	
			return new ApiResponse("Can not add service");
	}

	@Override
	public ApiResponse updateSoundService(SoundDto updateDto) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ApiResponse addSoundServiceToCart(CartDTO cartDto,Long service_id,Long userId) {
			
			Sound soundAddToCart = sound.findById(service_id).orElseThrow();
			

			Cart cartObject = mapper.map(cartDto, Cart.class);
			
			cartObject.setName(soundAddToCart.getName());
			
			cartObject.setQuantity(cartDto.getQuantity());
			
			int requiredQuantity = cartObject.getQuantity();
			
			int totalPrice = requiredQuantity * soundAddToCart.getPrice();
			
			cartObject.setService(soundAddToCart.getId());
			
			cartObject.setPrice(totalPrice);
			
			cartObject.setUserId(userId);
			
			Cart savingToCart = cartRepository.save(cartObject);
			
			return new ApiResponse("Add sucessfull");
	}

	@Override
	public Sound getSingleSoundRecord(Long serviceId) {
		Sound invitationObject = sound.findById(serviceId).orElseThrow();
		
		Sound anotherObject = new Sound();
		
		anotherObject.setName(invitationObject.getName());
		anotherObject.setCity(invitationObject.getCity());
		anotherObject.setDiscription(invitationObject.getDiscription());
		anotherObject.setPrice(invitationObject.getPrice());
		anotherObject.setRating(invitationObject.getRating());
		
		 
		return  anotherObject;
	}



	
}
