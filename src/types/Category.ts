import { Meal } from "./Meal";

export interface Category {
    id: string;
    description: string;
    meals: Meal[];
}

export interface SpringPageReponse<T> {
    data: {
        content: T[];
        totalPages: number;
        totalElements: number;
        number: number;
        size: number;
    };
    timestamp: string;
}