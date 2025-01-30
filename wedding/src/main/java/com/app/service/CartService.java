package com.app.service;

import java.security.Provider.Service;
import java.util.List;

import com.app.dto.ServicesDTO;
import com.app.entities.Services;
import com.app.responseapi.ApiResponse;

public interface CartService {

	public List<ServicesDTO> getAllCarttems();

}
