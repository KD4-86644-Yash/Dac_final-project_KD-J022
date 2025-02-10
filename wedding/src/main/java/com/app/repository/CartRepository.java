package com.app.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.dto.CartRespDTO;
import com.app.entities.Cart;
import com.app.entities.Services;



public interface CartRepository extends JpaRepository<Cart, Long>{

	List<Cart> findByUserId(Long userId);

}
