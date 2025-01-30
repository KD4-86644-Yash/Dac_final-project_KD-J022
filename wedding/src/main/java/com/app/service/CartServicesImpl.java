package com.app.service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ServicesDTO;
import com.app.entities.Cart;
import com.app.entities.Services;
import com.app.repository.CartRepository;

@Service
@Transactional
public class CartServicesImpl implements CartService {

	@Autowired
	public CartRepository services;
	
	@Autowired
	public ModelMapper mapper;

	@Override
	public List<ServicesDTO> getAllCarttems() {
		// TODO Auto-generated method stub
		return services.findAll().stream().map(cart -> mapper.map(cart, ServicesDTO.class)).collect(Collectors.toList());
	}
	


}
