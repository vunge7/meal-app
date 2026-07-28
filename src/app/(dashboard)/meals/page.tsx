'use client'

import { useCategories } from "@/src/hooks/useCategories";

import { MealCard } from "../../../features/meals/components/MealCard/MealCard";
import { CategoryService } from "@/src/features/meals/services/CategoryService";



export default function PageMeals() {
const { categories, loading, error } = useCategories();


  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col gap-2 px-1">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-50">Menu</p>
        <h1 className="text-3xl font-extrabold text-amber-50">Pratos</h1>
        <p className="text-sm text-black">9 itens disponível hoje</p>
      </div>

      {categories.map((category) => (
        <section key={category.description} className="rounded-3xl border border-primary/10 bg-[#5071E2] p-4 shadow-sm md:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">Categoria</p>
              <h2 className="text-2xl font-extrabold text-primary">{category.description}</h2>
            </div>
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-contrast">
              {category.meals.length} itens
            </span>
          </div>

          <div className="flex flex-col items-center gap-6">
            {category.meals.map((meal) => (
              <MealCard
                key={meal.title}
                title={meal.title}
                tag={meal.tag}
                badge={meal.badge}
                description={meal.description}
                price={meal.price}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}