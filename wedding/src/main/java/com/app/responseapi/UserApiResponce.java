package com.app.responseapi;

import java.util.List;

import org.springframework.http.HttpStatus;

import com.app.dto.Signup;
import com.app.dto.UserEntityDto;
import com.app.dto.VenueDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserApiResponce {
	private UserEntityDto userEntityDto;
	private List<UserEntityDto> userEntityDtos;
	private HttpStatus status;
	private String message;
	private boolean error;
}
