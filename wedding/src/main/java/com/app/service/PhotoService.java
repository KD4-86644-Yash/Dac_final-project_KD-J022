package com.app.service;

import java.util.List;

import com.app.dto.CartDTO;
import com.app.dto.PhotoDto;
import com.app.entities.InvitesGift;
import com.app.entities.Photo;
import com.app.responseapi.ApiResponse;

public interface PhotoService {

	List<PhotoDto> getAllPhoto();

	ApiResponse addPhotoService(PhotoDto photodto,Long vendorId);
	
	ApiResponse addPhotoServiceToCart(CartDTO cartDto,Long service_id,Long userId);

	Photo getSinglePhotoRecord(Long serviceId);

}
