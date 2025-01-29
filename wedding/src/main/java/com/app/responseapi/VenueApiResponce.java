package com.app.responseapi;

import java.util.List;

import org.springframework.http.HttpStatus;

import com.app.dto.VenueDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VenueApiResponce {

	private VenueDto venueDto;
	private List<VenueDto> venueDtos;
	private HttpStatus status;
	private String message;
	private boolean error;
}
