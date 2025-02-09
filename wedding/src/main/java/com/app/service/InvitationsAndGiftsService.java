package com.app.service;

import java.util.List;

import com.app.dto.CartDTO;
import com.app.dto.InvitesGiftDto;
import com.app.dto.MehandiDto;
import com.app.responseapi.ApiResponse;

public interface InvitationsAndGiftsService {
	
	List<InvitesGiftDto> getAllList();
	
	ApiResponse addInvitationAndGiftService(InvitesGiftDto invitesAndGifts);
	
	ApiResponse addInvitationAndGiftServiceToCart(CartDTO cartDto,Long serviceId, Long userId);

}
