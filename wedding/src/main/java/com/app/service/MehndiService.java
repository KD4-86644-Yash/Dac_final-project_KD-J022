package com.app.service;

import java.util.List;


import com.app.dto.MehandiDto;
import com.app.responseapi.ApiResponse;

public interface MehndiService {
	
		List<MehandiDto> getAllMehandiList();
		
		ApiResponse addMehandiService(MehandiDto mehandi);
		
		

}
