import { twJoin } from 'tailwind-merge';

interface BurgerIconProps {
  onClick: () => void;
  isTransformed: boolean;
}

const BurgerIcon = ({ onClick, isTransformed }: BurgerIconProps) => {
  return (
    <div
      className="z-10 flex size-4 flex-col justify-between"
      onClick={onClick}
    >
      <div
        className={twJoin(
          'relative h-[2px] w-1/2 bg-primary duration-200',
          isTransformed && 'left-[1px] top-1 rotate-45',
        )}
      />
      <div
        className={twJoin(
          'h-[2px] w-full bg-primary duration-200',
          isTransformed && '-rotate-45',
        )}
      />
      <div
        className={twJoin(
          'relative h-[2px] w-1/2 translate-x-full bg-primary duration-200',
          isTransformed && 'bottom-1 right-[1px] rotate-45',
        )}
      />
    </div>
  );
};

export default BurgerIcon;
