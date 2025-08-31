import MainHeader from '@/components/main-header/main-header';
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="font-quicksand">
      <body className="m-0 bg-[radial-gradient(#282c34,#282c34)]">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
