import ArrowBackIcon from './ArrowBackIcon';
import CarIcon from './CarIcon';
import CheckmarkIcon from './CheckmarkIcon';
import CrossedEyeIcon from './CrossedEyeIcon';
import EmailIcon from './EmailIcon';
import { IconProps } from './IconTypes';
import LockIcon from './LockIcon';
import PhoneIcon from './PhoneIcon';
import UserIcon from './UserIcon';
import VisibleEyeIcon from './VisibleEyeIcon';

export type IconType =
  | 'ArrowBackIcon'
  | 'VisibleEyeIcon'
  | 'CrossedEyeIcon'
  | 'CheckmarkIcon'
  | 'UserIcon'
  | 'EmailIcon'
  | 'PhoneIcon'
  | 'CarIcon'
  | 'LockIcon';

const iconMap = {
  ArrowBackIcon,
  VisibleEyeIcon,
  CrossedEyeIcon,
  CheckmarkIcon,
  UserIcon,
  EmailIcon,
  PhoneIcon,
  CarIcon,
  LockIcon,
};

interface GeneralIconProps extends IconProps {
  type: IconType;
}

const Icon = ({ type, ...restProps }: GeneralIconProps) => {
  const IconComponent = iconMap[type];
  return <IconComponent {...restProps} />;
};

export default Icon;
