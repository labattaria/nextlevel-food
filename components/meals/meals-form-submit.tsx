'use client';

import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`
              border-0
              rounded-sm
              px-8
              py-3
              text-white
              text-[1.25rem]
              font-inherit
              shadow-md
              cursor-pointer
              bg-gradient-to-r from-[#f9572a] to-[#ff9b05]
              hover:from-[#fd4715] hover:to-[#f9b241]
              disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed
            `}
        >
            {pending ? "Submitting..." : "Share Meal"}
        </button>
    );
}