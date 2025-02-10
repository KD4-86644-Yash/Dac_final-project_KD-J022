package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.CartDTO;
import com.app.dto.InvitesGiftDto;
import com.app.dto.MehandiDto;
import com.app.entities.InvitesGift;
import com.app.responseapi.ApiResponse;

public interface InvitationsAndGiftsService {
	
	List<InvitesGiftDto> getAllList();
	
	ApiResponse addInvitationAndGiftService(InvitesGiftDto invitesAndGifts);

	ApiResponse addInvitationAndGiftServiceToCart(CartDTO cartDto,Long serviceId, Long userId);
	
	InvitesGift getSingleInvitationRecord(Long serviceId);
}
