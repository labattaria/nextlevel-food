import Image from 'next/image';
import styles from './page.module.scss';
import { getMeal, getMeals } from '@/lib/meals';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const meals = await getMeals();
  console.log('Fetched meals:', meals);

  if (!meals || meals.length === 0) {
    return [];
  }

  return meals.map((meal) => ({
    mealSlug: meal.slug,
  }));
}

export async function generateMetadata({ params }) {
  const meal = await getMeal(params.mealSlug);

  if (!meal) {
    return {
      title: 'Meal not found',
      description: 'This meal does not exist.',
    };
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetailsPage({ params }) {
    const meal = await getMeal(params.mealSlug);

    if (!meal) {
        notFound();
    }

    const instructions = meal.instructions ?? '';
    const instructionsWithBreaks = instructions.replace(/\n/g, '<br />');

    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image src={`https://labattaria-nextjs-demo-users-image.s3.eu-north-1.amazonaws.com/${meal.image}`} alt={meal.title} fill />
                </div>
                <div className={styles.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={styles.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={styles.summary}>
                        {meal.summary}
                    </p>
                </div>
            </header>
            <main>
                <p
                    className={styles.instructions}
                    dangerouslySetInnerHTML={{ __html: instructionsWithBreaks }}
                >
                </p>
            </main>
        </>
    );
}