import { IconProps } from './IconTypes';

const MinusCircleIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.33268 14.668V17.3346H22.666V14.668H9.33268ZM15.9993 2.66797C8.63935 2.66797 2.66602 8.6413 2.66602 16.0013C2.66602 23.3613 8.63935 29.3346 15.9993 29.3346C23.3593 29.3346 29.3327 23.3613 29.3327 16.0013C29.3327 8.6413 23.3593 2.66797 15.9993 2.66797ZM15.9993 26.668C10.1193 26.668 5.33268 21.8813 5.33268 16.0013C5.33268 10.1213 10.1193 5.33464 15.9993 5.33464C21.8793 5.33464 26.666 10.1213 26.666 16.0013C26.666 21.8813 21.8793 26.668 15.9993 26.668Z"
        fill="black"
      />
    </svg>
  );
};

export default MinusCircleIcon;