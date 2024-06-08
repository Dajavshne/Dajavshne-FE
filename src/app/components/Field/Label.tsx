import { LabelHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const Label = ({
  className,
  isMovedUp,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & {
  isMovedUp?: boolean;
}) => {
  return (
    <label
      className={twMerge(
        'absolute left-3 top-1/2 z-10 -translate-y-1/2 cursor-text font-semibold text-gray duration-150',
        isMovedUp && 'top-2 translate-y-0 text-xs',
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
