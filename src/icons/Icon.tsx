import ArrowBackIcon from './ArrowBackIcon';
import CheckmarkIcon from './CheckmarkIcon';
import CrossedEyeIcon from './CrossedEyeIcon';
import EmailIcon from './EmailIcon';
import EyeIcon from './EyeIcon';
import FacebookIcon from './FacebookIcon';
import { IconProps } from './IconTypes';
import InstagramIcon from './InstagramIcon';
import LogoIcon from './LogoIcon';
import MinusCircleIcon from './MinusCircleIcon';
import PlusCircleIcon from './PlusCircleIcon';

export type IconType =
  | 'MinusCircleIcon'
  | 'PlusCircleIcon'
  | 'ArrowBackIcon'
  | 'EyeIcon'
  | 'CrossedEyeIcon'
  | 'CheckmarkIcon'
  | 'EmailIcon'
  | 'FacebookIcon'
  | 'InstagramIcon'
  | 'LogoIcon';

const iconMap = {
  MinusCircleIcon,
  PlusCircleIcon,
  ArrowBackIcon,
  EyeIcon,
  CrossedEyeIcon,
  CheckmarkIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
};

interface GeneralIconProps extends IconProps {
  type: IconType;
}

const Icon = ({ type, ...restProps }: GeneralIconProps) => {
  const IconComponent = iconMap[type];
  return <IconComponent {...restProps} />;
};

export default Icon;
