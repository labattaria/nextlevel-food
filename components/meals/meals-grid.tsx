import MealItem from './meal-item';
import styles from './meals-grid.module.scss';
import type { MealItemProps } from './types';

interface MealsGridProps {
  meals: MealItemProps[];
}

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.slug}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}