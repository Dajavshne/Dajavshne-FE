'use client';

import Image from 'next/image';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';

import MinusCircleIcon from '/public/icons/minus-circle.svg';
import PlusCircleIcon from '/public/icons/plus-circle.svg';

const Questions = () => {
  const [expandedQuestion, setExpandedQuestion] = useState('0');

  return (
    <section className="mt-7 lg:mt-16">
      <ul>
        <li className="border-t border-gray/30 py-6 first:border-t-0 first:pt-0 last:pb-0 lg:py-8">
          <button
            className="flex w-full justify-between gap-10"
            onClick={() =>
              setExpandedQuestion((prev) => (prev !== '1' ? '1' : ''))
            }
          >
            <span className="text-left text-lg font-bold lg:text-xl">
              Is there a free trial available ?
            </span>
            <Image
              src={expandedQuestion === '1' ? MinusCircleIcon : PlusCircleIcon}
              alt={expandedQuestion === '1' ? 'Collapse' : 'Expand'}
              className="mt-[2px] size-6 lg:size-8"
            />
          </button>
          <div
            className={twJoin(
              'grid grid-rows-[0fr] overflow-hidden text-sm font-medium duration-200',
              expandedQuestion === '1' && 'grid-rows-[1fr]',
            )}
          >
            <div className="row-start-1 row-end-3">
              <p className="mt-4 break-words pr-18 text-black/30 lg:w-2/3 2xl:w-1/2">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30 minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </div>
          </div>
        </li>
        <li className="border-t border-gray/30 py-6 first:border-t-0 first:pt-0 last:pb-0 lg:py-8">
          <button
            className="flex w-full justify-between gap-10"
            onClick={() =>
              setExpandedQuestion((prev) => (prev !== '2' ? '2' : ''))
            }
          >
            <span className="text-left text-lg font-bold lg:text-xl">
              Can i change my plan later ?
            </span>
            <Image
              src={expandedQuestion === '2' ? MinusCircleIcon : PlusCircleIcon}
              alt={expandedQuestion === '2' ? 'Collapse' : 'Expand'}
              className="mt-[2px] size-6 lg:size-8"
            />
          </button>
          <div
            className={twJoin(
              'grid grid-rows-[0fr] overflow-hidden text-sm font-medium duration-200',
              expandedQuestion === '2' && 'grid-rows-[1fr]',
            )}
          >
            <div className="row-start-1 row-end-3">
              <p className="mt-4 break-words pr-18 text-black/30 lg:w-2/3 2xl:w-1/2">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30 minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </div>
          </div>
        </li>
        <li className="border-t border-gray/30 py-6 first:border-t-0 first:pt-0 last:pb-0 lg:py-8">
          <button
            className="flex w-full justify-between gap-10"
            onClick={() =>
              setExpandedQuestion((prev) => (prev !== '3' ? '3' : ''))
            }
          >
            <span className="text-left text-lg font-bold lg:text-xl">
              What is your collection policy ?
            </span>
            <Image
              src={expandedQuestion === '3' ? MinusCircleIcon : PlusCircleIcon}
              alt={expandedQuestion === '3' ? 'Collapse' : 'Expand'}
              className="mt-[2px] size-6 lg:size-8"
            />
          </button>
          <div
            className={twJoin(
              'grid grid-rows-[0fr] overflow-hidden text-sm font-medium duration-200',
              expandedQuestion === '3' && 'grid-rows-[1fr]',
            )}
          >
            <div className="row-start-1 row-end-3">
              <p className="mt-4 break-words pr-18 text-black/30 lg:w-2/3 2xl:w-1/2">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30 minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Questions;
