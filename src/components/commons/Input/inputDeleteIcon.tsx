import { InputDeleteIconProps } from "@/types/components/commons/input/inputDeleteIcon";
import Image from "next/image";

export default function InputDeleteIcon({
  iconSize,
  text,
  setText,
}: InputDeleteIconProps) {
  const iconSrc = "/icons/circleX.svg";

  return (
    <Image
      src={iconSrc}
      alt='delete'
      className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer'
      width={iconSize}
      height={iconSize}
      style={{ display: text?.length === 0 ? "none" : "block" }}
      onClick={() => setText && setText("phone", "")}
    />
  );
}
