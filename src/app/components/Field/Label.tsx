import { LabelHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const Label = ({
  className,
  withIcon,
  isMovedUp,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & {
  isMovedUp?: boolean;
  withIcon?: boolean;
}) => {
  const { htmlFor } = props;

  return (
    <label
      className={twMerge(
        'absolute left-3 top-1/2 z-10 -translate-y-1/2 cursor-text text-sm font-semibold text-gray duration-150',
        isMovedUp && 'top-2 translate-y-0 text-xs',
        withIcon && 'left-13',
        htmlFor === 'phone' && withIcon && 'left-25 top-[21px] translate-y-0',
        withIcon && isMovedUp && 'top-1.5',
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
