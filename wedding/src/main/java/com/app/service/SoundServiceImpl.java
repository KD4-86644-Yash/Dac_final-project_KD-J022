package com.app.service;

import java.util.List; 
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.app.dto.SoundDto;
import com.app.repository.SoundRepository;
import com.app.responseapi.ApiResponse;

@Service
@Transactional
public class SoundServiceImpl implements SoundServices {

	@Autowired
	private SoundRepository sound;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<SoundDto> getAllSound() {
		return sound.findAll().stream()
				.map(sound -> mapper
				.map(sound, SoundDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse addSoundService(SoundDto sounddto) {
		
		return null;
	}

}
