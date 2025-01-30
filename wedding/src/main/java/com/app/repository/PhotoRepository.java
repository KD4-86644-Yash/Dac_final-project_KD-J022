package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Photo;

public interface PhotoRepository extends JpaRepository<Photo, Long> {

}
