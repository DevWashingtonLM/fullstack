
import type { FoodData } from "../interface/FoodData.ts";
import { useQuery } from "@tanstack/react-query";
import { viewFoods } from "../service/api";



export function useFoodData() {

    const query = useQuery<FoodData[]>({
        queryFn: viewFoods,
        queryKey: ['food-data'],
        retry: 2
    });

    return query;
}