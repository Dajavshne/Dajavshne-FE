'use client';

import { InputHTMLAttributes, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Icon from '@/icons/Icon';

const Input = (
  props: InputHTMLAttributes<HTMLInputElement> & {
    error?: boolean;
    success?: boolean;
  },
) => {
  const { className, type, error, success, ...restProps } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="relative">
      <input
        type={type === 'password' && isPasswordVisible ? 'text' : type}
        {...restProps}
        className={twMerge(
          'w-full rounded-4 border border-gray/30 bg-transparent p-3 pt-6 text-sm font-semibold focus:border-gray/100',
          type === 'password' && 'pr-10',
          error && 'border-red-500 focus:border-red-500',
          success && 'border-green-600 focus:border-green-600',
          className,
        )}
      />
      {type === 'password' && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Icon
            type={isPasswordVisible ? 'CrossedEyeIcon' : 'EyeIcon'}
            className="size-6"
          />
        </button>
      )}
    </div>
  );
};

export default Input;
