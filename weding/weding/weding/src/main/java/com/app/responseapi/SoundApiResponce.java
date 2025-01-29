package com.app.responseapi;

import java.util.List;

import org.springframework.http.HttpStatus;

import com.app.dto.SoundDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SoundApiResponce {
	private SoundDto soundDto;
	private List<SoundDto> soundDtos;
	private HttpStatus status;
	private String message;
	private boolean error;
}
