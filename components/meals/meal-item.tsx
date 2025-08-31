import Link from 'next/link';
import Image from 'next/image';
import type { MealItemProps } from './types';

export default function MealItem({ title, slug, image, summary, creator }: MealItemProps) {
  return (
    <article className="flex flex-col justify-between h-full rounded shadow-[0_0_12px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 ease-in-out text-[#ddd6cb] bg-[linear-gradient(90deg,#2c1e19,#25200f)]">
      <header>
        <div className="relative h-60">
          <Image
            src={`https://labattaria-nextjs-demo-users-image.s3.eu-north-1.amazonaws.com/${image}`}
            alt={title}
            fill
            className='object-cover'
          />
        </div>
        <div className="px-4 pt-2 pb-0">
          <h2 className="m-0 text-2xl font-bold font-montserrat">{title}</h2>
          <p className="text-xs text-[#cfa69b] italic">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="px-4 pt-4">{summary}</p>
        <div className="p-4 text-right">
          <Link href={`/meals/${slug}`} className="inline-flex items-center h-[36px] mt-4 py-2 px-4 rounded-lg bg-[linear-gradient(90deg,#f9572a,#ff9b05)] text-white font-bold no-underline hover:bg-[linear-gradient(90deg,#fd4715,#f9b241)] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)]">View Details</Link>
        </div>
      </div>
    </article>
  );
}