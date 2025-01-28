package com.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.SigninRequest;
import com.app.dto.SigninResponse;
import com.app.entities.UserEntity;
import com.app.repository.UserEntityRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserEntityRepository uer;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Override
	public UserEntity addU(UserEntity u) {
		u.setPassword(passwordEncoder.encode(u.getPassword()));
		return uer.save(u);
	}

    public Optional<UserEntity> findByEmail(String email) {
        return uer.findByEmail(email);
    }
	

}
