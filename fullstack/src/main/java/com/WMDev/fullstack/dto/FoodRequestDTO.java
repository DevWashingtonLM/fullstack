package com.WMDev.fullstack.dto;

import com.WMDev.fullstack.infrastructure.entity.Food;

import java.math.BigDecimal;

public record FoodRequestDTO(String title, String image, Long id, BigDecimal price) {

}
