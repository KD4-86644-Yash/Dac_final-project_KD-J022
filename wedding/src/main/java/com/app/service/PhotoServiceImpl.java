package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.PhotoDto;
import com.app.repository.PhotoRepository;


@Service
public class PhotoServiceImpl implements PhotoService {
	
	@Autowired
	private PhotoRepository photoRepository;

	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<PhotoDto> getAllPhoto() {
		return photoRepository.findAll().stream()
				.map(photo -> mapper
				.map(photo, PhotoDto.class))
				.collect(Collectors.toList());
		
	}

	@Override
	public Object addPhotoService(PhotoDto photodto) {
		// TODO Auto-generated method stub
		return null;
	}

}
