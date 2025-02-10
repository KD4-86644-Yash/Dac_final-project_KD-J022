package com.app.service;

import java.util.List;

import com.app.dto.CartDTO;
import com.app.dto.SoundDto;
import com.app.dto.SoundReqDTO;
import com.app.dto.SoundUpdateDTO;
import com.app.responseapi.ApiResponse;

public interface SoundServices {

	List<SoundReqDTO> getAllSound();

	ApiResponse addSoundService(SoundDto sounddto);

	ApiResponse updateSoundService(SoundDto updateDto);
	List<SoundReqDTO> getbyId(Long vandor_id);

	ApiResponse addSoundServiceToCart(CartDTO cartDto, Long service_id, Long userId);

}
