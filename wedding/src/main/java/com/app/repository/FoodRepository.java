package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Food;
@Repository
public interface FoodRepository extends JpaRepository<Food, Long>{

}
