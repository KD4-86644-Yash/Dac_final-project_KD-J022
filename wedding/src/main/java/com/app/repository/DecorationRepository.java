package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

//import com.app.dto.DecorationDto;
import com.app.entities.Decoration;

@Repository
public interface DecorationRepository extends JpaRepository<Decoration, Long>{

	List<Decoration> findByUserEntityId(Long vendorId);
	@Query("SELECT v FROM Decoration v WHERE v.id = :decorationId AND v.userEntity.id = :vendorId")
	Optional<Decoration> findBy(Long decorationId, Long vendorId);

}
