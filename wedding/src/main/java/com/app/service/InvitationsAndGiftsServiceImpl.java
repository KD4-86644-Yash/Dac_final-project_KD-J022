package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.InvitesGiftDto;
import com.app.dto.MehandiDto;
import com.app.entities.InvitesGift;
import com.app.entities.Mehandi;
import com.app.entities.UserEntity;
import com.app.repository.InvitationsAndGiftsRepository;
import com.app.repository.MehandiRepository;
import com.app.repository.UserEntityRepository;
import com.app.responseapi.ApiResponse;

@Service
@Transactional

public class InvitationsAndGiftsServiceImpl implements InvitationsAndGiftsService{

	@Autowired
	private InvitationsAndGiftsRepository invitationsAndGiftsRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserEntityRepository userEntityRepository;
	
	
	@Override
	public List<InvitesGiftDto> getAllList() {
		
		return invitationsAndGiftsRepository.findAll()
				.stream()
				.map(invitations -> mapper.map(invitations, InvitesGiftDto.class))
				.collect(Collectors.toList());
	}


	@Override
	public ApiResponse addInvitationAndGiftService(InvitesGiftDto invitesAndGifts) {
	
		InvitesGift newInvitesAndGifts = mapper.map(invitesAndGifts, InvitesGift.class);
		
		String emailValidation = invitesAndGifts.getVendorEmail();
		UserEntity VendorObject = userEntityRepository.findByEmail(emailValidation).orElseThrow();
		
		if(VendorObject.getEmail().equalsIgnoreCase(emailValidation)) {
		
			newInvitesAndGifts.setUserEntity(VendorObject);
			InvitesGift persistentEntity =  invitationsAndGiftsRepository.save(newInvitesAndGifts);
		return new ApiResponse("Added new Mehandi Service with ID " + persistentEntity.getId());
		}
		else 
			return new ApiResponse("Cannot add service" );
		
		
	}

}
