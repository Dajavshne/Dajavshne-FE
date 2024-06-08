import Link from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonBaseProps {
  className?: string;
  children: ReactNode;
}

interface ButtonProps extends ButtonBaseProps {
  type: 'button';
  onClick: () => void;
  buttonType?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
}

interface LinkButtonProps extends ButtonBaseProps {
  type: 'link';
  to: string;
}

const Button = (props: ButtonProps | LinkButtonProps) => {
  const { className, children, type } = props;

  if (type === 'link') {
    const { to } = props;

    return (
      <Link
        href={to}
        className={twMerge(
          'inline-block rounded bg-primary p-5 text-center text-sm font-bold text-white',
          className,
        )}
      >
        {children}
      </Link>
    );
  }

  const { buttonType = 'button', disabled } = props;

  return (
    <button
      disabled={disabled}
      type={buttonType}
      className={twMerge(
        'inline-block rounded bg-primary p-5 text-center text-sm font-bold text-white',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
