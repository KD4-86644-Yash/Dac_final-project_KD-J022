package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;

import com.app.dto.ApiResponse;
import com.app.dto.DecorationDto;
import com.app.entities.Decoration;
import com.app.entities.UserEntity;
import com.app.repository.DecorationRepository;
import com.app.repository.UserEntityRepository;

@Service
@Transactional
public class DecorationServiceImpl implements DecorationService{

	@Autowired
	private DecorationRepository decorationRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserEntityRepository userEntityRepository;
	
	@Override
	public List<DecorationDto> getAllDecoration() {
		
		return decorationRepository.findAll()
				.stream()
				.map(decoration -> mapper.map(decoration, DecorationDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse addDecorationService(DecorationDto dto) {
		Decoration decoration = mapper.map(dto, Decoration.class);
		String emailValidation = dto.getVendorEmail();
		
		UserEntity vendorObject = userEntityRepository.findByEmail(emailValidation).orElseThrow();
		if(vendorObject.getEmail().equalsIgnoreCase(emailValidation)) {
			decoration.setUserEntity(vendorObject);
			Decoration persistentEntity = decorationRepository.save(decoration);
			return new ApiResponse("Added new decoration Service with ID " + persistentEntity.getId());
			
		}
		else {
		
		return new ApiResponse("cannot add service");
		}
	}
	 
	
}
