import { IconProps } from './IconTypes';

interface StarIconProps extends IconProps {
  percent: number;
}

const StarIcon = ({ className, percent }: StarIconProps) => {
  const randomNumber = `star-${Math.random()}`;

  return (
    <svg height="24" viewBox="0 0 24 24" width="24" className={className}>
      <defs>
        <linearGradient id={randomNumber}>
          <stop offset="0%" stopColor="#FFC670" />
          <stop offset={`${percent}%`} stopColor="#FFC670" />
          <stop offset={`${percent}%`} stopColor="gray" />
          <stop offset="100%" stopColor="gray" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${randomNumber})`}
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export default StarIcon;
