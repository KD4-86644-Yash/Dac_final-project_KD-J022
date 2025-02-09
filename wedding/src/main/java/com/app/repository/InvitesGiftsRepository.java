package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.InvitesGift;
import com.app.entities.Venue;
@Repository
public interface InvitesGiftsRepository extends JpaRepository<InvitesGift, Long>{

	List<InvitesGift> findByUserEntityId(Long vendorId);
	
}
