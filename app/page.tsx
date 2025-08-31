import Link from "next/link";
import ImageSlideshow from "@/components/images/image-slideshow";
import './globals.css';

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-[75rem]">
        <div className="w-[40rem] h-[25rem]">
          <ImageSlideshow />
        </div>
        
        <div>
          <div className="text-[#ddd6cb] text-[1.5rem]">
            <h1 className="leading-tight h-[78px] my-[21.44px] text-[2rem] font-bold font-montserrat tracking-[0.15rem] uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p className="my-6">Taste & share food from all over the world.</p>
          </div>
          <div className="text-[1.5rem] flex gap-4 items-center">
            <Link
              href="/community"
              className="inline-block mt-4 py-2 pl-0 pr-4 rounded-md bg-transparent font-normal text-[#ff9b05] hover:text-[#f9b241]"
            >
              Join the Community
            </Link>

            <Link
              href="/meals"
              className="flex items-center justify-center mt-4 px-4 py-2 rounded-lg h-[46px] bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241]"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-[50rem] w-[90%] my-8 mx-auto text-center">
          <h2 className="flex items-center justify-center h-[45px] my-[30px] text-[36px] font-bold">How it works</h2>
          <p className="my-6">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className="my-6">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-[50rem] w-[90%] my-8 mx-auto text-center">
          <h2 className="flex items-center justify-center h-[45px] my-[30px] text-[36px] font-bold">Why NextLevel Food?</h2>
          <p className="my-6">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className="my-6">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
