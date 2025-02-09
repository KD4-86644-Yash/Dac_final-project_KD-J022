package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.InvitesGift;
import com.app.entities.MakeUp;
import com.app.entities.Venue;
@Repository
public interface MakeupRepository extends JpaRepository<MakeUp, Long>{
	
	List<MakeUp> findByUserEntityId(Long vendorId);

}
