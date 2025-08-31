import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
import logoImg from '@/assets/logo.png';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center py-8 px-4 md:px-[10%] md:py-8">
        <Link className="flex items-center justify-center gap-8 no-underline text-[#ddd6cb] font-bold font-montserrat tracking-[0.15rem] uppercase text-2xl" href="/">
          <Image
            src={logoImg}
            alt="A plate with food on it"
            priority
            className="w-20 h-20 object-contain [filter:drop-shadow(0_0_0.75rem_rgba(0,0,0,0.5))]"
          />
          NextLevel Food
        </Link>

        <nav>
          <ul className="list-none m-0 p-0 flex gap-6 text-xl">
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}