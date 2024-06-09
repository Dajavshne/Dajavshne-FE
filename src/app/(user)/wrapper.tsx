'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

const Wrapper = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const router = useRouter();

  return (
    <div className="flex size-full flex-col items-start justify-start py-10 lg:justify-center">
      <button
        className="mb-4 flex items-center gap-2"
        onClick={() => router.back()}
      >
        <Image
          width={24}
          height={24}
          src="/icons/arrow-back.svg"
          alt="Go back"
        />
        Back
      </button>
      {children}
    </div>
  );
};

export default Wrapper;
