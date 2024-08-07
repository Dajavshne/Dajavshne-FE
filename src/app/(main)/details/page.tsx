'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { twJoin } from 'tailwind-merge';

import galleryImage from '/public/images/slide.png';
import StarIcon from '@/icons/StarIcon';

const galleryImages = [galleryImage, galleryImage, galleryImage, galleryImage];

export default function Details() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  const onImageChange = (nextImage: number) => {
    setActiveImage(nextImage);
    if (imageRef.current) {
      imageRef.current.classList.add('animate-blink');

      setTimeout(() => {
        imageRef.current?.classList.remove('animate-blink');
      }, 200);
    }
  };

  return (
    <section className="mx-auto mb-4 max-w-1920 px-4 md:px-6 2xl:px-desktop">
      <h1 className="text-lg font-bold md:text-[28px] md:leading-10">
        Saburtalo car-wash detail page
      </h1>
      <div className="mt-6 flex flex-col gap-6 lg:gap-8 xl:flex-row">
        <div className="flex gap-4 max-xl:h-[516px] max-lg:h-[400px] max-md:h-72 xl:w-3/5">
          <div className="flex w-1/5 flex-col gap-4">
            {galleryImages.map((galleryImage, idx) => {
              return (
                <div
                  key={idx}
                  className="h-1/4"
                  onClick={() => onImageChange(idx)}
                >
                  <Image
                    priority
                    src={galleryImage}
                    alt=""
                    placeholder="blur"
                    className={twJoin(
                      'size-full cursor-pointer rounded-10 object-cover duration-200',
                      idx !== activeImage && 'opacity-70',
                    )}
                  />
                </div>
              );
            })}
          </div>
          <Image
            ref={imageRef}
            priority
            src={galleryImages[activeImage]}
            alt=""
            className="w-4/5 rounded-10 object-cover"
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col justify-between xl:w-2/5 xl:gap-14">
          <div>
            <div className="flex items-center justify-between">
              <h3>Saburtalo car-wash</h3>
              <div className="flex items-center gap-3">
                <StarIcon
                  className="size-5 md:size-6"
                  percent={(2.5 / 5) * 100}
                />
                <p className="text-base font-bold md:text-xl">2.5</p>
              </div>
            </div>
            <span className="mt-3 block text-lg font-bold md:text-[28px] md:leading-10">
              $ 15
            </span>
            <div className="mt-6 flex flex-col gap-3">
              <p>
                At Dajavshne.ge, we're passionate about providing exceptional
                car washes with a focus on [customer focus area - e.g.,
                convenience, exceptional cleaning, environmental
                responsibility]. Our team of friendly and experienced
                professionals is dedicated to making your car washing experience
                a breeze. We use only the highest quality products and
                cutting-edge technology to ensure your car gets a spotless
                clean, every time. Whether you're in need of a quick touch-up or
                a deep clean, we have a wash package to fit your needs and
                budget.
              </p>
              <p>
                At Dajavshne.ge, we're passionate about providing exceptional
                car washes with a focus on [customer focus area - e.g.,
                convenience, exceptional cleaning, environmental
                responsibility]. Our team of friendly and experienced
                professionals is dedicated to making your car washing experience
                a breeze. We use only the highest quality products and
                cutting-edge technology to ensure your car gets a spotless
                clean, every time. Whether you're in need of a quick touch-up or
                a deep clean, we have a wash package to fit your needs and
                budget.
              </p>
            </div>
          </div>
          <Link href="/" className="btn btn-primary mt-6 w-full">
            Book now
          </Link>
        </div>
      </div>
      <h4 className="mt-6 text-lg font-bold md:text-[28px] md:leading-10 xl:mt-18">
        Saburtalo car-wash feedbacks
      </h4>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }, (_, index) => index + 1).map((idx) => {
          const ratingScore = +(Math.random() * 5).toFixed(1);

          return (
            <div key={idx} className="rounded-10 border border-gray/30">
              <div>
                <div className="px-4 pb-8 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="size-24 rounded-full bg-pink-500" />
                    <span className="text-lg font-bold xl:text-2xl">
                      Luka Kalatozi
                    </span>
                  </div>
                  <p className="font-poppins mt-4 text-sm leading-7 md:text-base md:leading-7">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-gray/30 px-6 pb-6 pt-4">
                {Array.from({ length: 5 }, (_, index) => index + 1).map(
                  (idx) => {
                    return (
                      <div key={idx}>
                        <StarIcon
                          className="size-5 md:size-6"
                          percent={(ratingScore + 1 - idx) * 100}
                        />
                      </div>
                    );
                  },
                )}
                <span className="text-lg font-bold xl:text-2xl">
                  {ratingScore}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
