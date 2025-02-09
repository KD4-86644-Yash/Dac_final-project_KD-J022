package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Sound;

public interface SoundRepository extends JpaRepository<Sound, Long>{
	
	List<Sound> findByUserEntityId(Long vendorId); 

}
