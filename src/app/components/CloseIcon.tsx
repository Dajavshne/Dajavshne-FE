import Image from 'next/image';

interface CloseIconProps {
  onClick: () => void;
}

const CloseIcon = ({ onClick }: CloseIconProps) => {
  return (
    <Image
      src="/close.svg"
      alt="Close"
      width={24}
      height={24}
      className="self-end"
      onClick={onClick}
    />
  );
};

export default CloseIcon;
