package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Sound;

public interface SoundRepository extends JpaRepository<Sound, Long>{
	
	List<Sound> findByUserEntityId(Long vendorId); 
	@Query("SELECT v FROM Sound v WHERE v.id = :soundId AND v.userEntity.id = :vendorId")
	Optional<Sound> findBy(Long soundId, Long vendorId);

}
