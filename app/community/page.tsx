import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

export default function CommunityPage() {
  return (
    <>
      <header className="gap-12 my-12 mb-20 w-[90%] max-w-[75rem] mx-auto text-[#ddd6cb] text-[1.5rem] text-center">
        <h1 className="font-montserrat text-5xl my-8 font-bold">
          One shared passion: <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">Food</span>
        </h1>
        <p className="my-6">Join our community and share your favorite recipes!</p>
      </header>
      <main className="w-[90%] max-w-[40rem] mx-auto text-center">
        <h2 className="font-montserrat text-[32px] font-bold mt-[26px] mb-12 text-[#ddd6cb]">Community Perks</h2>

        <ul className="list-none my-12 mx-0 p-0">
          <li className="flex flex-col items-center gap-8">
            <Image
              src={mealIcon as StaticImageData}
              alt="A delicious meal"
              className="w-32 h-32 object-contain"
            />
            <p className="font-montserrat text-[1.5rem] font-bold m-0 text-[#ddd6cb]">
              Share & discover recipes
            </p>
          </li>

          <li className="flex flex-col items-center gap-8">
            <Image
              src={communityIcon as StaticImageData}
              alt="A crowd of people, cooking"
              className="w-32 h-32 object-contain"
            />
            <p className="font-montserrat text-[1.5rem] font-bold m-0 text-[#ddd6cb]">
              Find new friends & like-minded people
            </p>
          </li>

          <li className="flex flex-col items-center gap-8">
            <Image
              src={eventsIcon as StaticImageData}
              alt="A crowd of people at a cooking event"
              className="w-32 h-32 object-contain"
            />
            <p className="font-montserrat text-[1.5rem] font-bold m-0 text-[#ddd6cb]">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}