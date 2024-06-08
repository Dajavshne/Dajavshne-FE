'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import Icon from '@/icons/Icon';

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
        <Icon type="ArrowBackIcon" />
        Back
      </button>
      {children}
    </div>
  );
};

export default Wrapper;
