package com.app.service;

import org.springframework.stereotype.Service;

import com.app.dto.VenueDto;
import com.app.responseapi.VenueApiResponce;
@Service
public interface VendorService {

	public VenueApiResponce addVenue( VenueDto venueDto, Long vendorId);
	
}
