import { Open_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

import './globals.css';

const inter = Open_Sans({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twJoin(inter.className, 'w-screen overflow-x-hidden')}>
        {children}
      </body>
    </html>
  );
}
