import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import LogoIcon from '@/icons/LogoIcon';

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
            src={'/images/car-tyre-wash.jpeg'}
            width={1440}
            height={2160}
            alt="Background Image"
            className="absolute -z-10 size-full object-cover"
          />
          <div className="flex size-full items-center justify-center bg-black/30">
            <Link href="/" className="h-auto w-2/5">
              <LogoIcon className="h-auto w-full [&>path]:fill-beige" />
            </Link>
          </div>
        </div>
        <div className="w-full px-4 lg:w-2/5 lg:px-14 2xl:px-desktop">
          {children}
        </div>
      </div>
    </main>
  );
}
