package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import com.app.dto.DecorationDto;
import com.app.entities.Decoration;

@Repository
public interface DecorationRepository extends JpaRepository<Decoration, Long>{
	
}
