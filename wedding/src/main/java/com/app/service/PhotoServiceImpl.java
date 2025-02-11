package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.CartDTO;
import com.app.dto.PhotoDto;
import com.app.entities.Cart;
import com.app.entities.InvitesGift;
import com.app.entities.Photo;
import com.app.entities.Services;
import com.app.entities.UserEntity;
import com.app.repository.CartRepository;
import com.app.repository.PhotoRepository;
import com.app.repository.ServiceRepository;
import com.app.repository.UserEntityRepository;
import com.app.responseapi.ApiResponse;


@Service
@Transactional
public class PhotoServiceImpl implements PhotoService {
	
	@Autowired
	private PhotoRepository photoRepository;

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserEntityRepository userRepository;
	
	@Autowired
	private ServiceRepository serviceRepository;
	
	@Autowired
	private CartRepository cartRepository;
	
	@Override
	public List<PhotoDto> getAllPhoto() {
		return photoRepository.findAll().stream()
				.map(photo -> mapper
				.map(photo, PhotoDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse addPhotoService(PhotoDto photodto,Long vendorId) {
		
		Photo newPhoto = mapper.map(photodto, Photo.class);
		
		UserEntity user = userRepository.findById(vendorId).orElseThrow();
		
		if(user!=null) {
			
			newPhoto.setUserEntity(user);
			Photo persistUser =  photoRepository.save(newPhoto);
			return new ApiResponse("Added New Service With Id:"+ persistUser.getId());
		}
		else	
			return new ApiResponse("Can not add service");
	}

	@Override
	public ApiResponse addPhotoServiceToCart(CartDTO cartDto,Long service_id,Long userId) {
			
			Photo photoAddToCart = photoRepository.findById(service_id).orElseThrow();
			

			Cart cartObject = mapper.map(cartDto, Cart.class);
			
			cartObject.setName(photoAddToCart.getName());
			
			cartObject.setQuantity(cartDto.getQuantity());
			
			int requiredQuantity = cartObject.getQuantity();
			
			int totalPrice = requiredQuantity * photoAddToCart.getPrice();
			
			cartObject.setService(photoAddToCart.getId());
			
			cartObject.setPrice(totalPrice);
			
			cartObject.setUserId(userId);
			
			Cart savingToCart = cartRepository.save(cartObject);
			
			return new ApiResponse("Add sucessfull");
	}

	@Override
	public Photo getSinglePhotoRecord(Long serviceId) {
		
	Photo invitationObject = photoRepository.findById(serviceId).orElseThrow();
		
		Photo anotherObject = new Photo();
		
		anotherObject.setName(invitationObject.getName());
		anotherObject.setCity(invitationObject.getCity());
		anotherObject.setDiscription(invitationObject.getDiscription());
		anotherObject.setPrice(invitationObject.getPrice());
		anotherObject.setRating(invitationObject.getRating());
		
		 
		return  anotherObject;
	}
}