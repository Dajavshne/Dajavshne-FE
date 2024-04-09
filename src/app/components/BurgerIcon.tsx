import Image from 'next/image';

interface BurgerIconProps {
  onClick: () => void;
}

const BurgerIcon = ({ onClick }: BurgerIconProps) => {
  return (
    <Image
      src="/burger.svg"
      alt="Menu"
      width={16}
      height={16}
      className="lg:hidden"
      onClick={onClick}
    />
  );
};

export default BurgerIcon;
