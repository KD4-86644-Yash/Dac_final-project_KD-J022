package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.PhotoDto;
import com.app.entities.Photo;
import com.app.entities.UserEntity;
import com.app.repository.PhotoRepository;
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
	
	@Override
	public List<PhotoDto> getAllPhoto() {
		return photoRepository.findAll().stream()
				.map(photo -> mapper
				.map(photo, PhotoDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse addPhotoService(PhotoDto photodto) {
	    if (photodto == null || photodto.getVendorEmail() == null) {
	        return new ApiResponse("Vendor email is missing in the request!");
	    }
	    
	    String email = photodto.getVendorEmail();
	    
	    // Fetch the user by email, throw an error if not found
	    UserEntity user = userRepository.findByEmail(email)
	        .orElseThrow(() -> new RuntimeException("User with email " + email + " not found!"));

	    // Map DTO to Entity
	    Photo photo = mapper.map(photodto, Photo.class);
	    
	    if (email.equalsIgnoreCase(user.getEmail())) {
	        photo.setUserEntity(user);
	        Photo persistUser = photoRepository.save(photo);
	        return new ApiResponse("Added New Service With Id: " + persistUser.getId());
	    } else {    
	        return new ApiResponse("Cannot add service, email mismatch!");
	    }
	}


}
