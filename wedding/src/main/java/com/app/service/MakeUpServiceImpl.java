package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ApiResponse;
import com.app.dto.MakeUpDto;
import com.app.entities.MakeUp;
import com.app.entities.UserEntity;
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
	
	@Override
	public List<MakeUpDto> getAllMakeUp() {
		
		return makeUpRepository.findAll()
				.stream()
				.map(makeup -> mapper.map(makeup, MakeUpDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse addMakeUpService(MakeUpDto dto) {
		MakeUp makeup = mapper.map(dto, MakeUp.class);
		
		String emailValidation = dto.getVendorEmail();
		UserEntity vendorObject = userEntityRepository.findByEmail(emailValidation).orElseThrow();
		if(vendorObject.getEmail().equalsIgnoreCase(emailValidation)) {
			makeup.setUserEntity(vendorObject);
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

	
}
