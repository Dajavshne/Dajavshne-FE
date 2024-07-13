import { Arimo, Open_Sans, Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

import './globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arimo',
});

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twJoin(
          openSans.variable,
          arimo.variable,
          poppins.variable,
          openSans.className,
          'flex min-h-screen w-screen flex-col justify-between overflow-x-hidden',
        )}
      >
        {children}
      </body>
    </html>
  );
}
