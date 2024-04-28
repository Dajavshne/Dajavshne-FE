import type { Metadata } from 'next';
import { ReactNode } from 'react';

import Header from './components/Header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-1920 px-4 md:px-6 2xl:px-desktop">{children}</main>
    </>
  );
}
