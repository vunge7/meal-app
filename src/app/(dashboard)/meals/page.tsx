'use client';

import { useCategories } from "@/src/hooks/useCategories";
import { MealCard } from "../../../features/meals/components/MealCard/MealCard";

export default function PageMeals() {
  const { categories, loading, error } = useCategories();

  // Tratamento de carregamento
  if (loading) {
    return (
      <div className="w-full text-center py-12 text-white/80 animate-pulse font-medium">
        A carregar o menu...
      </div>
    );
  }

  // Tratamento de erro
  if (error) {
    return (
      <div className="w-full text-center py-12 text-red-200 font-medium">
        Erro ao carregar os pratos. Por favor, tente novamente.
      </div>
    );
  }

  // Cálculo do total de itens disponíveis
  const totalMeals = categories.reduce((acc, cat) => acc + cat.meals.length, 0);

  return (
    <div className="w-full space-y-8 max-w-4xl mx-auto pb-10">
      {/* Cabeçalho Principal da Página */}
      <div className="flex flex-col gap-1 px-1">
        <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary">
          Menu
        </p>
        <h1 className="text-4xl font-black text-white tracking-tight">
          Pratos
        </h1>
        <p className="text-sm font-medium text-white/80">
          {totalMeals} {totalMeals === 1 ? "item disponível" : "itens disponíveis"} hoje
        </p>
      </div>

      {/* Lista de Categorias */}
      {categories.map((category) => (
        <section
          key={category.description}
          className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 p-5 md:p-7 shadow-lg transition-all"
        >
          {/* Topo da Categoria */}
          <div className="mb-6 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-primary">
                Categoria
              </p>
              <h2 className="text-2xl font-bold text-white">
                {category.description}
              </h2>
            </div>

            {/* Badge de quantidade com contraste correto */}
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-black text-primary-contrast shadow-sm">
              {category.meals.length} {category.meals.length === 1 ? "item" : "itens"}
            </span>
          </div>

          {/* Container dos Cards */}
          <div className="flex flex-col gap-4">
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