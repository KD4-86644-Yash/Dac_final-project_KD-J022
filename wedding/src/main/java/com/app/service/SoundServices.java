package com.app.service;

import java.util.List;

import com.app.dto.SoundDto;
import com.app.dto.SoundUpdateDTO;
import com.app.responseapi.ApiResponse;

public interface SoundServices {

	List<SoundDto> getAllSound();

	ApiResponse addSoundService(SoundDto sounddto);

	ApiResponse updateSoundService(SoundUpdateDTO updateDto);

}
