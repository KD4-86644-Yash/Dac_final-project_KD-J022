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
	public ApiResponse addPhotoService(PhotoDto photodto) {
		
		Photo newPhoto = mapper.map(photodto, Photo.class);
		
		String email = photodto.getVendorEmail();
		UserEntity user = userRepository.findByEmail(email).orElseThrow();
		
		if(user.getEmail().equalsIgnoreCase(email)) {
			
			newPhoto.setUserEntity(user);
			Photo persistUser =  photoRepository.save(newPhoto);
			Services service = new Services();
		    service.setPhotoId(newPhoto);
		    serviceRepository.save(service);
			return new ApiResponse("Added New Service With Id:"+ persistUser.getId());
		}
		else	
			return new ApiResponse("Can not add service");
	}

	@Override
	public ApiResponse addPhotoServiceToCart(CartDTO cartDto,Long service_id) {
			
			Photo photoAddToCart = photoRepository.findById(service_id).orElseThrow();
			

			Cart cartObject = mapper.map(cartDto, Cart.class);
			
			cartObject.setName(photoAddToCart.getName());
			
			cartObject.setQuantity(cartDto.getQuantity());
			
			int requiredQuantity = cartObject.getQuantity();
			
			int totalPrice = requiredQuantity * cartObject.getPrice();
			
			cartObject.setService(photoAddToCart.getId());
			
			cartObject.setPrice(totalPrice);
			
			Cart savingToCart = cartRepository.save(cartObject);
			
			return new ApiResponse("Add sucessfull");
	}
	
	

}