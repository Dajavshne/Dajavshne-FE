import { Arimo, Open_Sans } from 'next/font/google';
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
          openSans.className,
          'w-screen overflow-x-hidden',
        )}
      >
        {children}
      </body>
    </html>
  );
}
