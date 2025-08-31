import { Suspense } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import type { MealFromDB } from '@/components/meals/types';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

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
      <header className="gap-12 my-12 mb-20 w-[90%] max-w-[75rem] mx-auto text-[#ddd6cb] text-[1.5rem]">
        <h1 className="font-montserrat text-5xl my-8 font-bold">
          Delicious meals, created{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p className="m-0">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="m-0">
          <Link
            href="/meals/share"
            className="inline-block mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense
          fallback={
            <p className="text-center animate-loading">
              Fetching meals...
            </p>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}