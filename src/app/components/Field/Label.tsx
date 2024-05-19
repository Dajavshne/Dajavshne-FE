'use client';

import { LabelHTMLAttributes, useContext } from 'react';
import { twMerge } from 'tailwind-merge';

import { FieldContext } from './Field';

const Label = ({
  className,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  const { isFocused } = useContext(FieldContext);

  return (
    <label
      className={twMerge(
        'absolute left-3 top-1/2 -translate-y-1/2 text-gray duration-150',
        isFocused && 'top-2 translate-y-0 text-xs',
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
