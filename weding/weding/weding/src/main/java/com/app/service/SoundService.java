package com.app.service;

import org.springframework.stereotype.Service;

import com.app.dto.SoundDto;
import com.app.responseapi.SoundApiResponce;
@Service
public interface SoundService {

	public SoundApiResponce addSound( SoundDto soundDto);

}
