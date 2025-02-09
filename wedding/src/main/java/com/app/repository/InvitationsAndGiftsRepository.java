package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.InvitesGift;
import com.app.entities.Sound;

public interface InvitationsAndGiftsRepository extends JpaRepository<InvitesGift, Long>{
	
	List<InvitesGift> findByUserEntityId(Long vendorId);

}
