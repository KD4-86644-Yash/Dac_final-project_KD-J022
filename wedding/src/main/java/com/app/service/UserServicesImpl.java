package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.UserEntity;
import com.app.repository.UserEntityRepository;

@Service
@Transactional

public class UserServicesImpl implements UserServices {
	
	@Autowired
	private UserEntityRepository user;

	@Override
	public UserEntity getSingleUser(Long serviceId) {
        UserEntity mehandiObject = user.findById(serviceId).orElseThrow();
		
        UserEntity anotherObject = new UserEntity();
		
		anotherObject.setFirstName(mehandiObject.getFirstName());
		anotherObject.setLastName(mehandiObject.getLastName());
		anotherObject.setPassword(mehandiObject.getPassword());
		anotherObject.setEmail(mehandiObject.getEmail());		
		anotherObject.setRole(mehandiObject.getRole());
		
		 
		return  anotherObject;
	}

}
