import { Open_Sans } from 'next/font/google';
import { ReactNode } from 'react';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
