package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.Vanue;
import com.app.repository.VenueRepository;

@Service
@Transactional


public class VenueServiceImpl implements VenueService  {
	
	@Autowired
	private VenueRepository venueRepository;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public List<Vanue> getAllVenue() {
		
		return venueRepository.findAll();
	}

}
