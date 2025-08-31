import MealItem from './meal-item';
import type { MealItemProps } from './types';

interface MealsGridProps {
  meals: MealItemProps[];
}

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className="w-[90%] max-w-[90rem] mx-auto my-8 grid gap-[5rem] list-none p-0 grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
      {meals.map((meal) => (
        <li key={meal.slug}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}