import Link from 'next/link';

import Icon from '@/icons/Icon';

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-1920 px-4 py-6 md:px-6 2xl:px-desktop 2xl:pb-8 2xl:pt-14">
        <div className="flex flex-col items-start gap-y-9 md:flex-row md:gap-x-32">
          <Icon
            type="LogoIcon"
            className="h-5 w-[127px] lg:h-auto lg:w-52 [&>path]:fill-beige"
          />
          <div>
            <p className="text-lg font-bold text-beige md:text-xl">Contact</p>
            <div className="mt-6 flex flex-col gap-4 text-sm text-beige md:text-base">
              <Link
                href="mailto:info@dajavshne.com"
                className="flex items-center gap-3"
              >
                <Icon type="EmailIcon" />
                <span>Info@dajavshne.com</span>
              </Link>
              <Link
                href="https://facebook.com/dajavshne"
                target="_blank"
                className="flex items-center gap-3"
              >
                <Icon type="FacebookIcon" />
                <span>Facebook.com/dajavshne</span>
              </Link>
              <Link
                href="https://instagram.com/dajavshne"
                target="_blank"
                className="flex items-center gap-3"
              >
                <Icon type="InstagramIcon" />
                <span>Instagram.com/dajavshne</span>
              </Link>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold text-beige md:text-xl">
              Categories
            </p>
            <div className="mt-6 flex flex-col gap-4 text-sm text-beige md:text-base">
              <Link href={'/'}>Home</Link>
              <Link href={'/'}>Booking car-wash</Link>
              <Link href={'/'}>Become partner</Link>
              <Link href={'/'}>F.A.Q</Link>
            </div>
          </div>
        </div>
        <p className="mt-14 font-arimo text-sm text-beige md:mt-16 lg:text-xl xl:mt-24">
          &copy; 2023 DAJAVSHNE. ყველა უფლება დაცულია.{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
