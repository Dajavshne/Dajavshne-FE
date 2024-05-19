import Image from 'next/image';
import Link from 'next/link';

import Button from '@/app/components/Button';
import StarIcon from '@/icons/StarIcon';

const TopWashingCenters = () => {
  return (
    <section className="mx-auto mt-6 max-w-1920 xl:mt-18">
      <div className="flex items-center justify-between px-4 md:px-6 2xl:px-desktop">
        <h3>Top washing centers</h3>
        <Link className="text-xs font-bold text-blue md:text-base" href={'/'}>
          See all
        </Link>
      </div>
      <div className="mt-6 flex justify-between gap-4 overflow-auto px-4 md:px-6 2xl:px-desktop">
        <div className="flex min-w-[265px] flex-col justify-between overflow-hidden rounded-10 border border-gray/30">
          <div>
            <Image
              src={'/images/washing-center.jpeg'}
              width={391}
              height={243}
              alt="Washing center"
            />
            <div className="px-4 pt-4">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold md:text-xl">
                  Saburtalo car-wash
                </p>
                <div className="flex items-center gap-3">
                  <StarIcon
                    className="size-5 md:size-6"
                    percent={(2.5 / 5) * 100}
                  />
                  <p className="text-base font-bold md:text-xl">2.5</p>
                </div>
              </div>
              <p className="mt-3 text-base font-bold md:text-xl">$15</p>
              <p className="mt-3 text-sm font-normal md:text-base">{`At Dajavshne.ge, we're passionate about providing exceptional car washes with a focus ...`}</p>
            </div>
          </div>
          <div className="px-4 pb-4 pt-6">
            <Button type="link" to="/" className="w-full">
              Book now
            </Button>
          </div>
        </div>
        <div className="flex min-w-[265px] flex-col justify-between overflow-hidden rounded-10 border border-gray/30">
          <div>
            <Image
              src={'/images/washing-center.jpeg'}
              width={391}
              height={243}
              alt="Washing center"
            />
            <div className="px-4 pt-4">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold md:text-xl">
                  Gldani car-wash
                </p>
                <div className="flex items-center gap-3">
                  <StarIcon
                    className="size-5 md:size-6"
                    percent={(3.0 / 5) * 100}
                  />
                  <p className="text-base font-bold md:text-xl">3.0</p>
                </div>
              </div>
              <p className="mt-3 text-base font-bold md:text-xl">$15</p>
              <p className="mt-3 text-sm font-normal md:text-base">{`At Dajavshne.ge, we're passionate about providing exceptional car washes with a focus ...`}</p>
            </div>
          </div>
          <div className="px-4 pb-4 pt-6">
            <Button type="link" to="/" className="w-full">
              Book now
            </Button>
          </div>
        </div>
        <div className="flex min-w-[265px] flex-col justify-between overflow-hidden rounded-10 border border-gray/30">
          <div>
            <Image
              src={'/images/washing-center.jpeg'}
              width={391}
              height={243}
              alt="Washing center"
            />
            <div className="px-4 pt-4">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold md:text-xl">Vera car-wash</p>
                <div className="flex items-center gap-3">
                  <StarIcon
                    className="size-5 md:size-6"
                    percent={(1.7 / 5) * 100}
                  />
                  <p className="text-base font-bold md:text-xl">1.7</p>
                </div>
              </div>
              <p className="mt-3 text-base font-bold md:text-xl">$15</p>
              <p className="mt-3 text-sm font-normal md:text-base">{`At Dajavshne.ge, we're passionate about providing exceptional car washes with a focus ...`}</p>
            </div>
          </div>
          <div className="px-4 pb-4 pt-6">
            <Button type="link" to="/" className="w-full">
              Book now
            </Button>
          </div>
        </div>
        <div className="flex min-w-[265px] flex-col justify-between overflow-hidden rounded-10 border border-gray/30">
          <div>
            <Image
              src={'/images/washing-center.jpeg'}
              width={391}
              height={243}
              alt="Washing center"
            />
            <div className="px-4 pt-4">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold md:text-xl">
                  Mtkvari car-wash
                </p>
                <div className="flex items-center gap-3">
                  <StarIcon
                    className="size-5 md:size-6"
                    percent={(4.5 / 5) * 100}
                  />
                  <p className="text-base font-bold md:text-xl">4.5</p>
                </div>
              </div>
              <p className="mt-3 text-base font-bold md:text-xl">$15</p>
              <p className="mt-3 text-sm font-normal md:text-base">{`At Dajavshne.ge, we're passionate about providing exceptional car washes with a focus ...`}</p>
            </div>
          </div>
          <div className="px-4 pb-4 pt-6">
            <Button type="link" to="/" className="w-full">
              Book now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopWashingCenters;
