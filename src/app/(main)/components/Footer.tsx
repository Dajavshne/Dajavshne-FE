import Link from 'next/link';

import EmailIcon from '@/icons/EmailIcon';
import FacebookIcon from '@/icons/FacebookIcon';
import InstagramIcon from '@/icons/InstagramIcon';
import LogoIcon from '@/icons/LogoIcon';

const Footer = () => {
  return (
    <footer className="bg-primary px-4 py-6 md:px-6 2xl:px-desktop 2xl:pb-8 2xl:pt-14">
      <div className="flex flex-col items-start gap-y-9 md:flex-row md:gap-x-32">
        <LogoIcon className="[&>path]:fill-beige h-5 w-[127px] lg:h-auto lg:w-52" />
        <div>
          <p className="text-beige text-lg font-bold">Contact</p>
          <div className="text-beige mt-6 flex flex-col gap-4 text-sm">
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
          <p className="text-beige text-lg font-bold">Categories</p>
          <div className="text-beige mt-6 flex flex-col gap-4 text-sm">
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Booking car-wash</Link>
            <Link href={'/'}>Become partner</Link>
            <Link href={'/'}>F.A.Q</Link>
          </div>
        </div>
      </div>
      <p className="text-beige mt-14 text-sm md:mt-16 xl:mt-24">
        &copy; 2023 DAJAVSHNE. ყველა უფლება დაცულია.{' '}
      </p>
    </footer>
  );
};

export default Footer;