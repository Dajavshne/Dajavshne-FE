import Image from 'next/image';
import { ReactNode } from 'react';

import CarTyreWash from '/public/images/car-tyre-wash.jpeg';
import LogoBeige from '/public/images/logo-beige.svg';

import Wrapper from './wrapper';

import '../globals.css';

export default function UserLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main>
      <div className="flex min-h-screen w-screen">
        <div className="relative hidden w-3/5 lg:block">
          <Image
            priority
            src={CarTyreWash}
            alt="Background Image"
            placeholder="blur"
            className="absolute -z-10 size-full object-cover"
          />
          <div className="flex size-full items-center justify-center bg-black/30">
            <Image
              priority
              src={LogoBeige}
              alt="Dajavshne"
              className="h-auto w-2/5"
            />
          </div>
        </div>
        <div className="w-full px-4 lg:w-2/5 lg:px-14 2xl:px-desktop">
          <Wrapper>{children}</Wrapper>
        </div>
      </div>
    </main>
  );
}
