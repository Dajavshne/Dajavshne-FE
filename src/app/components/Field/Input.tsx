'use client';

import { InputHTMLAttributes, useContext } from 'react';
import { twMerge } from 'tailwind-merge';

import { FieldContext } from './Field';

const Input = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  const { setIsFocused } = useContext(FieldContext);

  return (
    <input
      {...props}
      className={twMerge(
        'rounded-4 w-full border border-gray/30 bg-transparent p-3 pt-6 text-sm focus:border-gray/100',
        className,
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default Input;
