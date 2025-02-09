package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.InvitesGift;
import com.app.entities.Photo;

public interface PhotoRepository extends JpaRepository<Photo, Long> {
	
	List<Photo> findByUserEntityId(Long vendorId);

}
