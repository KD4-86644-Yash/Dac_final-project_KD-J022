package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.dto.MehandiDto;
import com.app.entities.Mehandi;
import com.app.responseapi.ApiResponse;

public interface MehandiRepository extends JpaRepository<Mehandi, Long>{

	
}
