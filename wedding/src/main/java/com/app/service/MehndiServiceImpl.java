package com.app.service;

import java.util.List; 
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.MehandiDto;
import com.app.entities.Mehandi;
import com.app.entities.UserEntity;
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
	
	

	@Override
	public List<MehandiDto> getAllMehandiList() {
		
		return mehandiRepository.findAll()
				.stream()
				.map(mehandi -> mapper.map(mehandi, MehandiDto.class))
				.collect(Collectors.toList());
	}



	@Override
	public ApiResponse addMehandiService(MehandiDto mehandi) {
		
		Mehandi newMehandi = mapper.map(mehandi, Mehandi.class);
		
		String emailValidation = mehandi.getVendorEmail();
		UserEntity VendorObject = userEntityRepository.findByEmail(emailValidation).orElseThrow();
		
		if(VendorObject.getEmail().equalsIgnoreCase(emailValidation)) {
		
			newMehandi.setUserEntity(VendorObject);
		Mehandi persistentEntity =  mehandiRepository.save(newMehandi);
		return new ApiResponse("Added new Mehandi Service with ID " + persistentEntity.getId());
		}
		else 
			return new ApiResponse("Cannot add service" );

		
	}

}
