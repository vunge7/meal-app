import { fetchClient } from "@/src/utils/api";
import { Category, SpringPageReponse } from "@/src/types/Category";

export const CategoryService = {
 
    getAll : async (): Promise<Category[]> =>{
        const response = await fetchClient<SpringPageReponse<Category>>('/categories');
        return response.data.content;
    },

}

