package com.app.responseapi;

import java.util.List;

import org.springframework.http.HttpStatus;

import com.app.dto.ServicesDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApiResponse {
	
	private ServicesDTO serviceDto;
	private List<ServicesDTO> serviceDtos;
	private HttpStatus status;
	private String message;
	private boolean error;
}