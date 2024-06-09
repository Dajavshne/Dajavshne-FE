import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import CarTyreWash from '@/app/(user)/images/car-tyre-wash.jpeg';

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
            src={CarTyreWash}
            width={1440}
            height={2160}
            alt="Background Image"
            placeholder="blur"
            className="absolute -z-10 size-full object-cover"
          />
          <div className="flex size-full items-center justify-center bg-black/30">
            <Link href="/" className="h-auto w-2/5">
              <Image
                priority
                width={470}
                height={74}
                src="/images/logo-beige.svg"
                alt="Dajavshne"
                className="h-auto w-full"
              />
            </Link>
          </div>
        </div>
        <div className="w-full px-4 lg:w-2/5 lg:px-14 2xl:px-desktop">
          <Wrapper>{children}</Wrapper>
        </div>
      </div>
    </main>
  );
}
