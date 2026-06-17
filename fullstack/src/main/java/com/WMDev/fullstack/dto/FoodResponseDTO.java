package com.WMDev.fullstack.dto;

import com.WMDev.fullstack.infrastructure.entity.Food;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
public record FoodResponseDTO(Long id, String image, String title, BigDecimal price) {
    public FoodResponseDTO(Food food){
        this(food.getId(), food.getImage(), food.getTitle(), food.getPrice());
    }

}
