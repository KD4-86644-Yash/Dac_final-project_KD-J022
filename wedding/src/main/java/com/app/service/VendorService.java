package com.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.dto.DecorationDto;
import com.app.dto.FoodDto;
import com.app.dto.InvitesGiftDto;
import com.app.dto.MakeUpDto;
import com.app.dto.PhotoDto;
import com.app.dto.ServicesDTO;
import com.app.dto.SoundDto;
import com.app.dto.VenueDto;
import com.app.responseapi.DecorationApiResponce;
import com.app.responseapi.FoodApiResponce;
import com.app.responseapi.InvitesGiftsApiResponce;
import com.app.responseapi.MakeUpApiResponce;
import com.app.responseapi.PhotoApiResponce;
import com.app.responseapi.SoundApiResponce;
import com.app.responseapi.VenueApiResponce;
@Service
public interface VendorService {

	public VenueApiResponce addVenue( VenueDto venueDto, Long vendorId);
	public SoundApiResponce addSound( SoundDto soundDto,Long vendorId);

	public FoodApiResponce addFood( FoodDto foodDto,Long vendorId);
	public DecorationApiResponce addDecoration( DecorationDto decorationDto,Long vendorId);
	public InvitesGiftsApiResponce addInvitesGifts( InvitesGiftDto InvitesGiftDto,Long vendorId);
	public MakeUpApiResponce addMakeUp( MakeUpDto makeUpDto,Long vendorId);
	public PhotoApiResponce addPhoto( PhotoDto PhotoDto,Long vendorId);
	public VenueApiResponce deleteVenueById( Long vanueId,Long vendor_id);
	public ServicesDTO getAllServices(Long vendorId);

}
