package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.MehandiDto;
import com.app.repository.MehandiRepository;

@Service
@Transactional

public class MehndiServiceImpl  implements MehndiService{
	
	@Autowired
	private MehandiRepository mehandiRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	

	@Override
	public List<MehandiDto> getAllMehandiList() {
		
		return mehandiRepository.findAll()
				.stream()
				.map(mehandi -> mapper.map(mehandi, MehandiDto.class))
				.collect(Collectors.toList());
	}

}
