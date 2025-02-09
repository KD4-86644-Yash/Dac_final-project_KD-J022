package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.MakeUp;

public interface MakeupRepository extends JpaRepository<MakeUp, Long>{

	List<MakeUp> findByUserEntityId(Long vendorId);

}
