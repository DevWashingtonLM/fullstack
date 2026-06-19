import type { FoodData } from "../interface/FoodData";
import axios from "axios";
const API_URL  = "http://localhost:8080";

export const viewFoods = async(): Promise<FoodData[]> => {

    const response = await axios.get(API_URL + "/food");

    return response.data;
}

export const createFood = async(food: FoodData): Promise<FoodData[]> =>{
    const response = await axios.post(
        API_URL + "/food", food
    )

    return response.data;
}


