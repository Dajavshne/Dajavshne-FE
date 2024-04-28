'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { twJoin } from 'tailwind-merge';

import BurgerIcon from '@/app/components/BurgerIcon';
import Button from '@/app/components/Button';
import NavLink from '@/app/components/NavLink';
import useWindowSize from '@/app/hooks/useWindowSize';

const Header = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const { width } = useWindowSize();
  const isDesktopMenu = width >= 1024;

  const toggleMenu = () => {
    setIsOverlayVisible(!isOverlayVisible);

    setTimeout(() => {
      setIsMenuOpened(!isMenuOpened);
    }, 0);
  };

  const renderLogo = () => {
    return (
      <Link href="/">
        <Image
          priority
          src="/logo.svg"
          alt="Dajavshne Logo"
          width={127}
          height={20}
          className="md:h-auto md:w-[200px]"
        />
      </Link>
    );
  };

  const renderMenu = () => {
    return (
      <ul className="flex flex-col items-start justify-center gap-x-5 gap-y-8 lg:flex-row lg:items-center lg:gap-y-0 2xl:gap-x-12">
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
    );
  };

  const renderAccountControls = () => {
    return (
      <>
        <Link className="text-center text-sm font-semibold" href={'/sign-in'}>
          Sign in
        </Link>
        <Button type="link" to="/register" classes="">
          Create account
        </Button>
      </>
    );
  };

  const renderMenuOverlay = () => {
    return (
      typeof window !== 'undefined' &&
      !isDesktopMenu &&
      isOverlayVisible &&
      createPortal(
        <div
          className="fixed left-0 top-0 size-full bg-black/15 backdrop-blur-sm"
          onClick={toggleMenu}
        >
          <div
            className={twJoin(
              'absolute right-0 flex h-full w-[264px] flex-col bg-white px-4 py-8 transition-all duration-300',
              !isMenuOpened && 'translate-x-full',
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="mt-6">{renderMenu()}</nav>
            <div className="mt-12 flex flex-col-reverse gap-y-4">{renderAccountControls()}</div>
          </div>
        </div>,
        document.body,
      )
    );
  };

  return (
    <header className="mx-auto flex max-w-1920 items-center justify-between px-4 py-5 md:px-6 lg:py-10 2xl:px-desktop">
      {renderLogo()}
      {!isDesktopMenu && <BurgerIcon isTransformed={isMenuOpened} onClick={toggleMenu} />}
      {isDesktopMenu && <nav className="hidden lg:block">{renderMenu()}</nav>}
      {isDesktopMenu && (
        <div className=" hidden items-center justify-center gap-6 lg:flex">
          {renderAccountControls()}
        </div>
      )}
      {renderMenuOverlay()}
    </header>
  );
};

export default Header;
