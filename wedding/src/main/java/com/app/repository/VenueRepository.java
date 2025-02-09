package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.app.dto.CartDTO;
import com.app.entities.Venue;
import com.app.responseapi.ApiResponse;

//@Repository
public interface VenueRepository extends JpaRepository<Venue, Long> {

	Venue findAllById(String name);

}
