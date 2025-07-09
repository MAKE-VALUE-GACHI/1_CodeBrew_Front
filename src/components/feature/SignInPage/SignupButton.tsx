import { SignupButtonProps } from "@/types/components/feature/SignInPage/SignUpButton";
import Image from "next/image";

export default function SignupButton({
  type,
  font = "body-5",
  iconSize = 24,
  className,
}: SignupButtonProps) {
  const buttonTypes = {
    kakao: {
      icon: "/icons/login/kakao.svg",
      text: "text-grey-800",
      background: "bg-[#FEE500]",
      hover: "hover:bg-[#FCDA00]",
      phrase: "카카오로 시작하기",
    },
    naver: {
      icon: "/icons/login/naver.svg",
      text: "text-white",
      background: "bg-[#03C75A]",
      hover: "hover:bg-[#03C139]",
      phrase: "네이버로 시작하기",
    },
    facebook: {
      icon: "/icons/login/facebook.svg",
      text: "text-white",
      background: "bg-[#1A77F2]",
      hover: "hover:bg-[#006CE0]",
      phrase: "페이스북으로 시작하기",
    },
    google: {
      icon: "/icons/login/google.svg",
      text: "text-grey-600",
      background: "bg-white border border-border",
      hover: "hover:bg-background",
      phrase: "구글로 시작하기",
    },
    phone: {
      icon: "/icons/login/phone.svg",
      text: "text-white",
      background: "bg-primary-400",
      hover: "hover:bg-primary-300",
      phrase: "전화번호로 시작하기",
    },
  };

  const currentStyle = buttonTypes[type];
  const typeClasses = `${currentStyle.background} ${currentStyle.text} ${currentStyle.hover} ${currentStyle.phrase}`;

  const baseClasses = `flex items-center justify-center rounded-xl gap-2
    w-full h-12
    focus:outline-none disabled:cursor-not-allowed cursor-pointer truncate text-${font}`;

  const buttonClasses = `${typeClasses} ${baseClasses} ${className}`;

  return (
    <button className={buttonClasses}>
      <Image
        src={currentStyle.icon}
        alt={type}
        width={iconSize}
        height={iconSize}
        className='mb-0.5'
      />
      <span>{currentStyle.phrase}</span>
    </button>
  );
}
