package com.app.service;

import java.util.List;

import com.app.dto.CartDTO;
import com.app.dto.PhotoDto;
import com.app.responseapi.ApiResponse;

public interface PhotoService {

	List<PhotoDto> getAllPhoto();

	ApiResponse addPhotoService(PhotoDto photodto);
	
	ApiResponse addPhotoServiceToCart(CartDTO cartDto,Long service_id,Long userId);
	

}
