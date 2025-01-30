package com.app.service;

import java.util.List;

import com.app.dto.PhotoDto;

public interface PhotoService {

	List<PhotoDto> getAllPhoto();

	Object addPhotoService(PhotoDto photodto);

}
