package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.SoundDto;
import com.app.dto.SoundUpdateDTO;
import com.app.entities.Photo;
import com.app.entities.Services;
import com.app.entities.Sound;
import com.app.entities.UserEntity;
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
	private UserEntityRepository userRepository;
	
	@Autowired
	private ServiceRepository serviceRepository;
	
	@Override
	public List<SoundDto> getAllSound() {
		return sound.findAll().stream()
				.map(sound -> mapper
				.map(sound, SoundDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse addSoundService(SoundDto sounddto) {
	Sound newSound = mapper.map(sounddto, Sound.class);
		
		String email = sounddto.getUserEntity();
		UserEntity user = userRepository.findByEmail(email).orElseThrow();
		
		if(user.getEmail().equalsIgnoreCase(email)) {
			
			newSound.setUserEntity(user);
			Sound persistUser =  sound.save(newSound);
			Services service = new Services();
		    service.setSoundId(persistUser);
		    serviceRepository.save(service);
			return new ApiResponse("Added New Service With Id:"+ persistUser.getId());
		}
		else	
			return new ApiResponse("Can not add service");
	}

	@Override
	public ApiResponse updateSoundService(SoundUpdateDTO updateDto) {
//		Sound newSound = sound.findByName()
		return null;
	}
	
}
