package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.app.dto.SoundDto;
import com.app.dto.VenueDto;
import com.app.entities.Sound;
import com.app.repository.SoundRepository;
import com.app.responseapi.SoundApiResponce;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class SoundServiceImpl implements SoundService{

	
	
	
	@Autowired
	public SoundRepository soundRepository;
	
	@Autowired
	public ModelMapper mapper;

	@Override
	public SoundApiResponce addSound(SoundDto soundDto) {
		log.info("vv1="+soundDto.getName());
		try {
			Sound sound = mapper.map(soundDto, Sound.class);
			log.info("vv2="+soundDto.getName());
			sound.setName(soundDto.getName());
			sound.setStatus(soundDto.getStatus());
			sound.setDuration(soundDto.getDuration());
			sound.setCity(soundDto.getCity());
			sound.setDiscription(soundDto.getDiscription());
			sound.setPrice(soundDto.getPrice());
			sound.setRating(soundDto.getRating());
			sound.setType(soundDto.getType());
			sound.setId(null);
			log.info(sound.getName());
			

			soundRepository.save(sound);
			SoundDto saveToVenueDto =  mapper.map(sound, SoundDto.class);
			log.info(saveToVenueDto.getName());
			return new SoundApiResponce(saveToVenueDto,null,HttpStatus.CREATED, "Sound add successfully",false);
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		return new SoundApiResponce(null,null,HttpStatus.INTERNAL_SERVER_ERROR, "error",true);

	}
}

