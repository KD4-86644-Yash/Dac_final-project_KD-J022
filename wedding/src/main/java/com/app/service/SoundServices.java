package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.SoundDto;

public interface SoundServices {

	List<SoundDto> getAllSound();

	ApiResponse addSoundService(SoundDto sounddto);

}
