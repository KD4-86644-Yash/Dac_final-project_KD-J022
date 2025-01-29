package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Sound;

public interface SoundRepository extends JpaRepository<Sound, Long>{

}
