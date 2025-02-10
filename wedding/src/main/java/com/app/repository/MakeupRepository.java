package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.MakeUp;

@Repository
public interface MakeupRepository extends JpaRepository<MakeUp, Long>{
	
	List<MakeUp> findByUserEntityId(Long vendorId);
	
	@Query("SELECT v FROM MakeUp v WHERE v.id = :makeUpId AND v.userEntity.id = :vendorId")
	Optional<MakeUp> findBy(Long makeUpId, Long vendorId);

}
