import { Suspense } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import type { MealFromDB } from '@/components/meals/types';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

async function Meals() {
    const meals: MealFromDB[] = await getMeals();

    return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}