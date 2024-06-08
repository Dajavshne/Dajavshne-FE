import { IconProps } from './IconTypes';

const CheckmarkIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_28_607)">
        <path
          d="M6 10.8L3.66666 8.46667C3.40666 8.20667 2.99333 8.20667 2.73333 8.46667C2.47333 8.72667 2.47333 9.14 2.73333 9.4L5.52666 12.1933C5.78666 12.4533 6.20666 12.4533 6.46666 12.1933L13.5333 5.13334C13.7933 4.87334 13.7933 4.46 13.5333 4.2C13.2733 3.94 12.86 3.94 12.6 4.2L6 10.8Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_28_607">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckmarkIcon;
