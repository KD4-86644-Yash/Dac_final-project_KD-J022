package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.InvitesGiftDto;
import com.app.dto.MehandiDto;
import com.app.repository.InvitationsAndGiftsRepository;
import com.app.repository.MehandiRepository;

@Service
@Transactional

public class InvitationsAndGiftsServiceImpl implements InvitationsAndGiftsService{

	@Autowired
	private InvitationsAndGiftsRepository invitationsAndGiftsRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	
	@Override
	public List<InvitesGiftDto> getAllList() {
		
		return invitationsAndGiftsRepository.findAll()
				.stream()
				.map(invitations -> mapper.map(invitations, InvitesGiftDto.class))
				.collect(Collectors.toList());
	}

}
