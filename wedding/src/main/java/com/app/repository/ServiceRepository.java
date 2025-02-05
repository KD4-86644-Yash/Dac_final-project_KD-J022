package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Services;
import com.app.entities.Sound;
import com.app.entities.UserEntity;

public interface ServiceRepository extends JpaRepository<Services, Long> {

	Optional<UserEntity> findBySoundId(Sound updatedSound);

}
