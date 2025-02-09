package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.CartDTO;
import com.app.dto.MakeUpDto;

//import org.springframework.data.jpa.repository.JpaRepository;

//import com.app.entities.MakeUp;

public interface MakeUpService  {
	List<MakeUpDto> getAllMakeUp();
	ApiResponse addMakeUpService(MakeUpDto dto);
	
	ApiResponse deleteMakeUpService();
	ApiResponse addMakeUpToCart(CartDTO dto, Long makeUpId, Long userId );

}
