import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const NavLink = (props: LinkProps & { children?: ReactNode }) => {
  const currentPath = usePathname();
  const { href, children } = props;
  const active = currentPath === href;

  return (
    <Link {...props} className={twMerge('hover:text-primary', active && 'font-bold text-primary')}>
      {children}
    </Link>
  );
};

export default NavLink;
