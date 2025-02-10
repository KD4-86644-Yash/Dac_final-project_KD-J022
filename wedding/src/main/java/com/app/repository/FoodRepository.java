package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.Food;
@Repository
public interface FoodRepository extends JpaRepository<Food, Long>{
	
	List<Food> findByUserEntityId(Long vendorId);
	@Query("SELECT v FROM Food v WHERE v.id = :foodId AND v.userEntity.id = :vendorId")
	Optional<Food> findBy(Long foodId, Long vendorId);

}
