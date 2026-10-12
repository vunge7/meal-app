import { useEffect, useState } from "react";
import { CategoryService } from "../features/meals/services/CategoryService";
import { Category } from "../types/Category";


export function useCategories() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        CategoryService.getAll()
        .then( data=> setCategories(data))
        .catch(err=> setError(err.message))
        .finally(()=> setLoading(false))

     }, [])

     return {categories, loading, error}
}