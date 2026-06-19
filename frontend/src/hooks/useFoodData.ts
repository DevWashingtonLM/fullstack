
import type { FoodData } from "../interface/FoodData.ts";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../service/Api.ts";


export function useFoodData() {

    const query = useQuery<FoodData[]>({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    });

    return query;
}