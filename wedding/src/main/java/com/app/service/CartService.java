package com.app.service;

import java.security.Provider.Service;
import java.util.List;

import com.app.dto.CartRespDTO;
import com.app.dto.ServicesDTO;
import com.app.entities.Cart;
import com.app.entities.Services;
import com.app.responseapi.ApiResponse;

public interface CartService {

	List<CartRespDTO> getAllCartItems(Long userId);

	ApiResponse deleteCartIten(String name, Long userId);
}
