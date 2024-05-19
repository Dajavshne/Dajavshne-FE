import Link from 'next/link';

import EmailIcon from '@/icons/EmailIcon';
import FacebookIcon from '@/icons/FacebookIcon';
import InstagramIcon from '@/icons/InstagramIcon';
import LogoIcon from '@/icons/LogoIcon';

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-1920 px-4 py-6 md:px-6 2xl:px-desktop 2xl:pb-8 2xl:pt-14">
        <div className="flex flex-col items-start gap-y-9 md:flex-row md:gap-x-32">
          <LogoIcon className="h-5 w-[127px] lg:h-auto lg:w-52 [&>path]:fill-beige" />
          <div>
            <p className="text-lg font-bold text-beige md:text-xl">Contact</p>
            <div className="mt-6 flex flex-col gap-4 text-sm text-beige md:text-base">
              <div className="flex items-center gap-3">
                <EmailIcon />
                <span>Info@dajavshne.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FacebookIcon />
                <span>Facebook.com/dajavshne</span>
              </div>
              <div className="flex items-center gap-3">
                <InstagramIcon />
                <span>Instagram.com/dajavshne</span>
              </div>
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
        <p className="mt-14 text-sm text-beige md:mt-16 lg:text-xl xl:mt-24">
          &copy; 2023 DAJAVSHNE. ყველა უფლება დაცულია.{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
