'use client';

import ImagePicker from '@/components/meals/image-picker';
import { useFormState } from 'react-dom';
import { shareMeal } from '@/lib/actions';
import MealsFormSubmit from '@/components/meals/meals-form-submit';
import type { FormState } from '@/components/meals/types';

export default function ShareMealPage() {
  const [state, formAction] = useFormState<FormState, FormData>(shareMeal, { message: null });

  return (
    <>
      <header className="gap-12 h-[120px] my-12 mb-20 w-[90%] max-w-[75rem] mx-auto text-[#ddd6cb] text-[1.5rem]">
        <h1 className="my-8 font-montserrat text-5xl font-bold">
          Share your{' '}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="my-6">Or any other meal you feel needs sharing!</p>
      </header>

      <main className="w-[90%] max-w-[75rem] mx-auto my-12 text-white">
        <form className="max-w-[50rem]" action={formAction}>
          <div className="flex gap-4">
            <p className="w-full my-4">
              <label
                htmlFor="name"
                className="block mb-2 text-[1rem] font-montserrat uppercase font-bold text-[#b3aea5]"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
            <p className="w-full my-4">
              <label
                htmlFor="email"
                className="block mb-2 text-[1rem] font-montserrat uppercase font-bold text-[#b3aea5]"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
          </div>
          <p className="my-4">
            <label
              htmlFor="title"
              className="block mb-2 text-[1rem] font-montserrat uppercase font-bold text-[#b3aea5]"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p className="my-4">
            <label
              htmlFor="summary"
              className="block mb-2 text-[1rem] font-montserrat uppercase font-bold text-[#b3aea5]"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p className="my-4">
            <label
              htmlFor="instructions"
              className="block mb-2 text-[1rem] font-montserrat uppercase font-bold text-[#b3aea5]"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
              className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            ></textarea>
          </p>

          <ImagePicker label="Your image" name="image" />

          {state.message && <p className="mt-2">{state.message}</p>}

          <p className="text-right">
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}