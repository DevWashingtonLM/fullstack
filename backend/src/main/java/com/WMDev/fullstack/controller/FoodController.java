package com.WMDev.fullstack.controller;

import com.WMDev.fullstack.dto.FoodRequestDTO;
import com.WMDev.fullstack.dto.FoodResponseDTO;
import com.WMDev.fullstack.infrastructure.entity.Food;
import com.WMDev.fullstack.infrastructure.repository.FoodRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/food")
@CrossOrigin(origins = "http://localhost:5173/")
@RequiredArgsConstructor
public class FoodController {
    private final FoodRepository foodRepository;



    @GetMapping
    public List<FoodResponseDTO> findAll() {
        List<FoodResponseDTO> foodList = foodRepository.findAll().stream().map(FoodResponseDTO::new).toList();
        return foodList;
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveFood(@RequestBody FoodRequestDTO data) {
        Food foodData = new Food(data);
        foodRepository.save(foodData);
        return;
    }


}
