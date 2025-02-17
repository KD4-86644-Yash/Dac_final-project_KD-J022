package com.app.service;

import java.io.ByteArrayInputStream;

import org.springframework.stereotype.Service;

import com.app.dto.CartDTO;
import com.app.dto.DecorationDto;
import com.app.dto.FoodDto;
import com.app.dto.InvitesGiftDto;
import com.app.dto.MakeUpDto;
import com.app.dto.MehandiDto;
import com.app.dto.PhotoDto;
import com.app.dto.ServicesDTO;
import com.app.dto.SoundDto;
import com.app.dto.VenueDto;
import com.app.responseapi.ApiResponse;
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
//	public SoundApiResponce addSound( SoundDto soundDto,Long vendorId);
	ApiResponse addSoundService(SoundDto sounddto,Long vendorId);
	ApiResponse addDecorationService(DecorationDto dto, Long vendorId);
	ApiResponse addPhotoService(PhotoDto photodto,Long vendorId);
	ApiResponse addFoodService(FoodDto dto,Long vendorId);

	ApiResponse addMehandiService(MehandiDto mehandi,Long vendorId);
	ApiResponse addInvitationAndGiftService(InvitesGiftDto invitesAndGifts,Long vendorId);
	ApiResponse addMakeUpService(MakeUpDto dto,Long vendorId);

//	public FoodApiResponce addFood( FoodDto foodDto,Long vendorId);
//	public DecorationApiResponce addDecoration( DecorationDto decorationDto,Long vendorId);
//	public InvitesGiftsApiResponce addInvitesGifts( InvitesGiftDto InvitesGiftDto,Long vendorId);

//	public MakeUpApiResponce addMakeUp( MakeUpDto makeUpDto,Long vendorId);
//	public PhotoApiResponce addPhoto( PhotoDto PhotoDto,Long vendorId);

	public VenueApiResponce deleteVenueById( Long vanueId,Long vendor_id);
	
	public ServicesDTO getAllServices(Long vendorId);
	public SoundApiResponce deleteSound(Long soundId, Long vendorId);

	public FoodApiResponce deleteFood(Long foodId, Long vendorId);

	public DecorationApiResponce deleteDecoration(Long decorationid, Long vendorId);

	public InvitesGiftsApiResponce deleteInvitesGifts(Long invitesGiftId, Long vendorId);

	public MakeUpApiResponce deleteMakeUp(Long makeUpId, Long vendorId);

	public PhotoApiResponce deletePhoto(Long PhotoId, Long vendorId);

	public ByteArrayInputStream downloadExcel(Long vendor_id);

}
