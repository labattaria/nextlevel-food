'use server';

import type { FormState } from '@/components/meals/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

interface MealForm {
  title: string;
  summary: string;
  instructions: string;
  image: File;
  creator: string;
  creator_email: string;
}

function getString(formData: FormData, key: string): string | undefined {
    const value = formData.get(key);
    return typeof value === "string" ? value : undefined;
}

function getFile(formData: FormData, key: string): File | undefined {
    const value = formData.get(key);
    return value instanceof File ? value : undefined;
}

export async function shareMeal(_prevState: FormState, formData: FormData): Promise<FormState> {
    const title = getString(formData, "title");
    const summary = getString(formData, "summary");
    const instructions = getString(formData, "instructions");
    const image = getFile(formData, "image");
    const creator = getString(formData, "name");
    const creator_email = getString(formData, "email");

    if (!title || !summary || !instructions || !creator || !creator_email || !creator_email.includes("@") || !image || image.size === 0) {
        return {
            message: "Invalid input."
        };
    }

    const meal: MealForm = { title, summary, instructions, image, creator, creator_email };

    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');

    return {
        message: null
    };
}