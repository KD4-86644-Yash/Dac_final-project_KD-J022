package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;


import com.app.entities.Vanue;

//@Repository
public interface VenueRepository extends JpaRepository<Vanue, Long> {

//	Vanue findAllById(String name);

}
