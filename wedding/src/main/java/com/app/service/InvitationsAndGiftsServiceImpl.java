package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.CartDTO;
import com.app.dto.InvitesGiftDto;
import com.app.dto.MehandiDto;
import com.app.entities.Cart;
import com.app.entities.InvitesGift;
import com.app.entities.Mehandi;
import com.app.entities.UserEntity;
import com.app.repository.CartRepository;
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
	
	@Autowired
	private CartRepository cartRepository;
	
	
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
	
	
	@Override
	public ApiResponse addInvitationAndGiftServiceToCart(CartDTO cartDto, Long serviceId, Long userId) {
		InvitesGift invitationAndGiftsAddingToCart = invitationsAndGiftsRepository.findById(serviceId).orElseThrow();
		
		UserEntity user = userEntityRepository.findById(userId).orElseThrow();
		

		
		
		Cart cartObject = mapper.map(cartDto, Cart.class);
		
		cartObject.setName(invitationAndGiftsAddingToCart.getName());
		
		cartObject.setQuantity(cartDto.getQuantity());
		
		int requiredQuantity = cartObject.getQuantity();
		
		int totalPrice = requiredQuantity * invitationAndGiftsAddingToCart.getPrice();
		
		cartObject.setService(invitationAndGiftsAddingToCart.getId());
		
		cartObject.setPrice(totalPrice);
		
		cartObject.setUserId(user.getId());
		
		
		
		Cart savingToCart = cartRepository.save(cartObject);
		
		return new ApiResponse("Add service" + savingToCart.getName() + " having id" );
	}

}
