import Link from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonBaseProps {
  classes?: string;
  children: ReactNode;
}

interface ButtonProps extends ButtonBaseProps {
  type: 'button';
  onClick: () => void;
  buttonType?: string;
}

interface LinkButtonProps extends ButtonBaseProps {
  type: 'link';
  to: string;
}

const Button = (props: ButtonProps | LinkButtonProps) => {
  const { classes, children, type } = props;

  if (type === 'link') {
    const { to } = props;

    return (
      <Link
        href={to}
        className={twMerge(
          'inline-block rounded bg-primary p-5 text-center text-sm font-bold text-white',
          classes,
        )}
      >
        {children}
      </Link>
    );
  }

  return null;
};

export default Button;
