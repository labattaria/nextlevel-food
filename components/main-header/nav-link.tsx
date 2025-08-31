'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
    href: string;
    children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
    const path = usePathname();

    const isActive = path?.startsWith(href);

    return (
        <Link
            href={href}
            className={`
                no-underline text-[#ddd6cb] font-bold px-4 py-2 rounded-lg
                hover:bg-[linear-gradient(90deg,#ff8a05,#f9b331)]
                hover:[background-clip:text] hover:[-webkit-background-clip:text] hover:[-webkit-text-fill-color:transparent]
                hover:[text-shadow:0_0_18px_rgba(248,190,42,0.8)]
                active:bg-[linear-gradient(90deg,#ff8a05,#f9b331)]
                active:[background-clip:text] active:[-webkit-background-clip:text] active:[-webkit-text-fill-color:transparent]
                ${isActive ? "bg-[linear-gradient(90deg,#ff8a05,#f9b331)] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]" : ""}
            `}    
        >
            {children}
        </Link>
    );
}