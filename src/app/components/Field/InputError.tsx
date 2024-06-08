/* eslint-disable react/no-array-index-key */

import { twMerge } from 'tailwind-merge';

type InputErrorProps = {
  messages: string[];
  className?: string;
};

const InputError = ({ messages = [], className = '' }: InputErrorProps) => {
  if (!messages.length) return null;

  return (
    <>
      {messages.map((message, index) => (
        <p
          key={index}
          className={twMerge(
            'pl-2 pt-1 text-sm font-normal text-red-500',
            className,
          )}
        >
          {message}
        </p>
      ))}
    </>
  );
};

export default InputError;
