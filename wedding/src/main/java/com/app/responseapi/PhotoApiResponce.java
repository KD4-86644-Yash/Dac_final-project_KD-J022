package com.app.responseapi;

import java.util.List;

import org.springframework.http.HttpStatus;

import com.app.dto.PhotoDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PhotoApiResponce {
	private PhotoDto photoDto;
	private List<PhotoDto> photoDtos;
	private HttpStatus status;
	private String message;
	private boolean error;
}
