package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import com.app.dto.DecorationDto;
import com.app.entities.Decoration;
import com.app.entities.Sound;

@Repository
public interface DecorationRepository extends JpaRepository<Decoration, Long>{

	List<Decoration> findByUserEntityId(Long vendorId);
	
}
