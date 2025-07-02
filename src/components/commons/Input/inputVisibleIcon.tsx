import Image from "next/image";

interface InputVisibleIconProps {
  iconSize: number;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export default function InputVisibleIcon({
  iconSize,
  isVisible,
  setIsVisible,
}: InputVisibleIconProps) {
  const iconSrc = isVisible
    ? "./icons/eyeCrossLine.svg"
    : "./icons/eyeOpen.svg";

  return (
    <Image
      src={iconSrc}
      alt={isVisible ? "visible" : "unVisible"}
      className='absolute right-4 top-1/2 w-auto -translate-y-1/2 cursor-pointer'
      width={iconSize}
      height={iconSize}
      onClick={() => setIsVisible(!isVisible)}
    />
  );
}
