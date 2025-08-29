'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import styles from './nav-link.module.scss';

interface NavLinkProps {
    href: string;
    children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
    const path = usePathname();

    const linkClass = path?.startsWith(href)
        ? `${styles.link} ${styles.active}`
        : styles.link;
    
    return (
        <Link href={href} className={linkClass}>
            {children}
        </Link>
    );
}