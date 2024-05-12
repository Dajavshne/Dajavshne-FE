'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface FieldProps {
  className?: string;
  children: ReactNode;
}

interface FieldContextValue {
  isFocused: boolean;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
}

export const FieldContext = createContext<FieldContextValue>({
  isFocused: false,
  setIsFocused: () => {},
});

const Field = ({ children, className }: FieldProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const contextValue: FieldContextValue = {
    isFocused,
    setIsFocused,
  };

  return (
    <div className={twMerge('relative w-full', className)}>
      <FieldContext.Provider value={contextValue}>
        {children}
      </FieldContext.Provider>
    </div>
  );
};

export default Field;
