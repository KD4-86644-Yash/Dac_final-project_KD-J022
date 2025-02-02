package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Vanue;

//@Repository
public interface VenueRepository extends JpaRepository<Vanue, Long> {

//	Vanue findAllById(String name);
	@Query("SELECT v FROM Vanue v WHERE v.id = :vanueId AND v.userEntity.id = :vendor_id")
	Optional<Vanue> findBy(Long vanueId, Long vendor_id);
}
