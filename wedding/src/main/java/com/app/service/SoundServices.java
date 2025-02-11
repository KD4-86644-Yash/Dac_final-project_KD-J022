package com.app.service;

import java.util.List;

import com.app.dto.CartDTO;
import com.app.dto.SoundDto;
import com.app.dto.SoundReqDTO;
import com.app.dto.SoundUpdateDTO;
import com.app.entities.Photo;
import com.app.entities.Sound;
import com.app.responseapi.ApiResponse;

public interface SoundServices {

	List<SoundReqDTO> getAllSound();

	ApiResponse addSoundService(SoundDto sounddto,Long vendorId);

	ApiResponse updateSoundService(SoundDto updateDto);
	
	Sound getSingleSoundRecord(Long serviceId);
	
	List<SoundReqDTO> getbyId(Long vandor_id);

	ApiResponse addSoundServiceToCart(CartDTO cartDto, Long service_id, Long userId);

}
