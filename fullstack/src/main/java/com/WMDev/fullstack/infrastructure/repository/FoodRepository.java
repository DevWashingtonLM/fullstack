package com.WMDev.fullstack.infrastructure.repository;

import com.WMDev.fullstack.infrastructure.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;


public interface FoodRepository extends JpaRepository<Food, Long> {
}
