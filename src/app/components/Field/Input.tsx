'use client';

import { InputHTMLAttributes, useState } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

import Icon, { IconType } from '@/icons/Icon';

const Input = (
  props: InputHTMLAttributes<HTMLInputElement> & {
    iconType?: IconType;
    error?: boolean;
    success?: boolean;
  },
) => {
  const { className, iconType, type, error, success, ...restProps } = props;
  const { name } = restProps;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="relative">
      <input
        type={type === 'password' && isPasswordVisible ? 'text' : type}
        {...restProps}
        className={twMerge(
          'w-full rounded-4 border border-gray/30 bg-transparent p-3 pt-6 text-sm font-semibold focus:border-gray/100',
          type === 'password' && 'pr-10',
          iconType && 'pl-13 pb-4 pt-5',
          iconType && name === 'phone' && 'pl-25',
          error && 'border-red-500 focus:border-red-500',
          success && 'border-green-600 focus:border-green-600',
          className,
        )}
      />
      {iconType && (
        <Icon
          type={iconType}
          className={twJoin(
            'absolute left-4 top-1/2 size-6 -translate-y-1/2',
            error && '[&>path]:fill-danger',
            success && '[&>path]:fill-success',
          )}
        />
      )}
      {name === 'phone' && iconType && (
        <span className="left-13 absolute top-[21px] text-sm font-medium after:absolute after:-right-2 after:top-0 after:block after:h-5 after:w-px after:bg-gray/50 after:content-['']">
          +995
        </span>
      )}
      {type === 'password' && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Icon
            type={isPasswordVisible ? 'CrossedEyeIcon' : 'VisibleEyeIcon'}
            className="size-6"
          />
        </button>
      )}
    </div>
  );
};

export default Input;
