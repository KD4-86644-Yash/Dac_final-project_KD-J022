package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.InvitesGift;
import com.app.entities.Venue;

//@Repository
public interface VenueRepository extends JpaRepository<Venue, Long> {
	
	List<Venue> findByUserEntityId(Long vendorId);

//	Vanue findAllById(String name);
//	@Query("SELECT v FROM Vanue v WHERE v.id = :vanueId AND v.userEntity.id = :vendor_id")
//	Optional<Venue> findBy(Long vanueId, Long vendor_id);
}
