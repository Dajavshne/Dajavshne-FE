import CheckmarkIcon from './CheckmarkIcon';
import { IconProps } from './IconTypes';

export type IconType = 'CheckmarkIcon';

const iconMap = {
  CheckmarkIcon,
};

interface GeneralIconProps extends IconProps {
  type: IconType;
}

const Icon = ({ type, ...restProps }: GeneralIconProps) => {
  const IconComponent = iconMap[type];
  return <IconComponent {...restProps} />;
};

export default Icon;
