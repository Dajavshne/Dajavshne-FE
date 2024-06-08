'use client';

import '@splidejs/react-splide/css';

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <section className="mt-4 px-4 md:px-6 lg:mt-8 2xl:px-desktop">
      <div className="relative overflow-hidden rounded-xl">
        <Splide
          options={{
            type: 'loop',
            speed: 1000,
            arrows: false,
            autoplay: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            interval: 5000,
            classes: {
              pagination:
                'absolute bottom-4 left-0 flex w-full justify-center gap-2 [&_.is-active]:w-10 [&_.is-active]:bg-white',
              page: 'h-1 cursor-pointer rounded-[4px] duration-300 w-6 bg-white/50',
            },
          }}
        >
          {originalContent.map(({ imageSrc, bigText, smallText }, index) => {
            return (
              <SplideSlide key={index} className="relative w-full">
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
                    <Link href="/" className="btn btn-primary mt-8">
                      Book now
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default Slider;
