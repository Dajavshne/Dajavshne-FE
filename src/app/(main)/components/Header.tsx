'use client';

import Image from 'next/image';
import Link from 'next/link';

import NavLink from '@/app/components/NavLink';

const Header = () => {
  return (
    <header className="mx-auto flex max-w-1920 justify-between px-[150px] py-10">
      <Image
        priority
        src="/logo.svg"
        alt="Dajavshne Logo"
        width={250}
        height={40}
      />
      <nav>
        <ul className="flex gap-x-12">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/book">Booking car wash</NavLink>
          </li>
          <li>
            <NavLink href="/partner">Become partner</NavLink>
          </li>
          <li>
            <NavLink href="/faq">F.A.Q</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <Link href={'/sign-in'}>Sign in</Link>
        <Link href={'/register'}>Create account</Link>
      </div>
    </header>
  );
};

export default Header;
