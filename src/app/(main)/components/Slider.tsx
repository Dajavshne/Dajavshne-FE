'use client';

import _ from 'lodash';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { twJoin } from 'tailwind-merge';

import Button from '@/app/components/Button';

const originalContent = [
  {
    imageSrc: '/slide.png',
    bigText: `1 Don't let dirt steal your car's shine. Get a wash now!`,
    smallText: `Quick as a flash! Get a sparkling clean car without the wait. Limited-time offer! Book
    your wash and save.`,
  },
  {
    imageSrc: '/slide.png',
    bigText: `2 Don't let dirt steal your car's shine. Get a wash now!`,
    smallText: `Quick as a flash! Get a sparkling clean car without the wait. Limited-time offer! Book
    your wash and save.`,
  },
  {
    imageSrc: '/slide.png',
    bigText: `3 Don't let dirt steal your car's shine. Get a wash now!`,
    smallText: `Quick as a flash! Get a sparkling clean car without the wait. Limited-time offer! Book
    your wash and save.`,
  },
  {
    imageSrc: '/slide.png',
    bigText: `4 Don't let dirt steal your car's shine. Get a wash now!`,
    smallText: `Quick as a flash! Get a sparkling clean car without the wait. Limited-time offer! Book
    your wash and save.`,
  },
];

const Slider = () => {
  const delay = 5000;
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const [isChangeable, setIsChangeable] = useState<boolean>(true);
  const content = [
    originalContent[originalContent.length - 1],
    ...originalContent,
    originalContent[0],
  ];
  const sliderWidth = `${content.length * 100}%`;
  const disableTransition =
    activeSlide === content.length - 1 || activeSlide === 0;

  const changeSlide = useCallback(() => {
    if (activeSlide >= content.length - 1) {
      setActiveSlide(1);
      return;
    }

    if (activeSlide <= 0) {
      setActiveSlide(content.length - 2);
      return;
    }

    setActiveSlide(activeSlide + 1);
  }, [activeSlide, content.length]);

  useEffect(() => {
    setIsChangeable(false);

    _.debounce(() => setIsChangeable(true), disableTransition ? 700 : 0)();

    if (
      disableTransition &&
      sliderRef.current?.classList.contains('duration-700')
    ) {
      _.debounce(() => {
        sliderRef.current?.classList.remove('duration-700');
        changeSlide();
      }, 700)();
    }

    if (
      !disableTransition &&
      !sliderRef.current?.classList.contains('duration-700')
    ) {
      _.debounce(() => {
        sliderRef.current?.classList.add('duration-700');
      }, 30)();
    }

    sliderTimeoutRef.current = setTimeout(() => {
      changeSlide();
    }, delay);
    return () => {
      if (sliderTimeoutRef.current) clearTimeout(sliderTimeoutRef.current);
    };
  }, [changeSlide, disableTransition]);

  const goToSlide = (slideIndex: number) => {
    if (!isChangeable) return;
    if (sliderTimeoutRef.current) clearTimeout(sliderTimeoutRef.current);

    setActiveSlide(slideIndex);

    sliderTimeoutRef.current = setTimeout(() => {
      changeSlide();
    }, delay);
  };

  return (
    <section className="mt-4 px-4 md:px-6 lg:mt-8 2xl:px-desktop">
      <div className="relative overflow-hidden rounded-xl">
        <div
          ref={sliderRef}
          className="relative flex duration-700"
          style={{ width: sliderWidth, left: `calc(-${activeSlide} * 100%)` }}
        >
          {content.map(({ imageSrc, bigText, smallText }, index) => {
            return (
              <div key={index} className="relative w-full">
                <Image
                  priority
                  src={imageSrc}
                  alt="slide"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[314px] w-full object-cover md:h-96 xl:h-[540px]"
                />
                <div className="absolute left-0 top-0 flex size-full flex-col justify-between pl-4 pr-8 pt-6 text-white md:pl-8 md:pt-10 xl:px-12 xl:pt-[138px]">
                  <div>
                    <p className="max-w-[708px] text-xl font-bold xl:text-[40px] xl:leading-[48px]">
                      {bigText}
                    </p>
                    <p className="mt-3 max-w-[436px] text-sm leading-[26px]">
                      {smallText}
                    </p>
                    <Button type="link" to="/" className="mt-8">
                      Book now
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-4 left-0 flex w-full justify-center gap-2">
          {originalContent.map((_, index) => {
            const isActive =
              index === activeSlide - 1 ||
              ((activeSlide === 0 || activeSlide === content.length - 1) &&
                index === 0) ||
              (activeSlide >= content.length - 3 &&
                index === originalContent.length - 100);

            return (
              <div
                key={index}
                className={twJoin(
                  'h-1 cursor-pointer rounded-[4px] duration-300',
                  !isActive && 'w-6 bg-white/50',
                  isActive && 'w-10 bg-white',
                )}
                onClick={() => goToSlide(index + 1)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slider;
