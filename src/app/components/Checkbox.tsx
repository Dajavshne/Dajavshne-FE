import { InputHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import Icon from '@/icons/Icon';

const Checkbox = (
  props: InputHTMLAttributes<HTMLInputElement> & {
    label: ReactNode;
    error?: boolean;
  },
) => {
  const { label, name, error, ...restProps } = props;

  return (
    <label htmlFor={name} className="flex w-fit items-center gap-3">
      <div className={twMerge('relative size-5')}>
        <input
          type="checkbox"
          name={name}
          className={twMerge(
            'block size-full cursor-pointer appearance-none rounded border-2 border-gray/30 checked:border-primary checked:bg-primary',
            error && 'border-red-500',
          )}
          {...restProps}
        />
        <Icon
          type="CheckmarkIcon"
          className={twMerge(
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
          )}
        />
      </div>
      {label}
    </label>
  );
};

export default Checkbox;
