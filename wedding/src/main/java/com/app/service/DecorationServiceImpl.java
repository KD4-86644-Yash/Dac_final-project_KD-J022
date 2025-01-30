package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;

import com.app.dto.DecorationDto;
import com.app.repository.DecorationRepository;

@Service
@Transactional
public class DecorationServiceImpl implements DecorationService{

	@Autowired
	private DecorationRepository decorationRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<DecorationDto> getAllDecoration() {
		
		return decorationRepository.findAll()
				.stream()
				.map(decoration -> mapper.map(decoration, DecorationDto.class))
				.collect(Collectors.toList());
	}
	 
	
}
