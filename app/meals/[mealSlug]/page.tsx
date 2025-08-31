import Image from 'next/image';
import { getMeal, getMeals } from '@/lib/meals';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { MealFromDB } from '@/components/meals/types';

interface Params {
  mealSlug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  const meals = await getMeals();

  if (!meals || meals.length === 0) {
    return [];
  }

  return meals.map((meal) => ({
    mealSlug: meal.slug,
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
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

export default async function MealDetailsPage({ params }: { params: Params }) {
    const meal: MealFromDB | null = await getMeal(params.mealSlug);

    if (!meal) {
        notFound();
    }

    const instructions = meal.instructions ?? '';
    const instructionsWithBreaks = instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className="flex gap-12 px-4 py-8 max-w-[80rem] mx-auto">
        <div className="relative w-[30rem] h-[20rem]">
          <Image
            src={`https://labattaria-nextjs-demo-users-image.s3.eu-north-1.amazonaws.com/${meal.image}`}
            alt={meal.title}
            fill
            className="object-cover rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] animate-fade-slide-in-left"
          />
        </div>
        <div className="px-4 pt-2 text-[#ddd6cb] max-w-[40rem] animate-fade-slide-in-right">
          <h1 className="leading-tight h-[136px] text-[3.5rem] font-bold uppercase font-montserrat text-shadow-[0_0_0.5rem_rgba(0,0,0,0.5)]">
            {meal.title}
          </h1>
          <p className="my-6 text-[1.5rem] italic text-[#cfa69b]">
            by{' '}
            <a
              href={`mailto:${meal.creator_email}`}
              className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent hover:text-transparent hover:shadow-[0_0_1.125rem_rgba(248,190,42,0.8)]"
            >
              {meal.creator}
            </a>
          </p>
          <p className="my-6 text-[1.5rem]">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className="text-[1.25rem] !leading-normal bg-[#6e6464] text-[#13120f] rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] p-8 max-w-[60rem] mx-auto my-8 animate-fade-slide-in-bottom"
          dangerouslySetInnerHTML={{ __html: instructionsWithBreaks }}
        />
      </main>
    </>
  );
}