package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.InvitesGift;
import com.app.entities.Venue;
@Repository
public interface InvitesGiftsRepository extends JpaRepository<InvitesGift, Long>{

	List<InvitesGift> findByUserEntityId(Long vendorId);

	@Query("SELECT v FROM InvitesGift v WHERE v.id = :invitesGiftId AND v.userEntity.id = :vendorId")
	Optional<InvitesGift> findBy(Long invitesGiftId, Long vendorId);
	
}
