import { getMeals } from '@/lib/meals';

export default async function DebugPage() {
  const meals = await getMeals();

  return (
    <pre>{JSON.stringify(meals, null, 2)}</pre>
  );
}