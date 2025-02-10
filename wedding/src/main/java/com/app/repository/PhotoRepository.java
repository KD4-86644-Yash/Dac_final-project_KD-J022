package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Photo;

public interface PhotoRepository extends JpaRepository<Photo, Long> {
	
	List<Photo> findByUserEntityId(Long vendorId);
	@Query("SELECT v FROM Photo v WHERE v.id = :photoId AND v.userEntity.id = :vendorId")
	Optional<Photo> findBy(Long photoId, Long vendorId);

}
