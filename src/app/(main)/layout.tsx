import type { Metadata } from 'next';
import { ReactNode } from 'react';

import Footer from './components/Footer';
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
      <main className="mt-4 grow lg:mt-8">{children}</main>
      <Footer />
    </>
  );
}
