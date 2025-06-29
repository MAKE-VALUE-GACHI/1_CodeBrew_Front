import { FontSizeType } from "@/constants/design";

interface ButtonProps {
  type: "passwordReset" | "signupEmail" | "resend";
  text: string;
  fontSize?: FontSizeType;
  width?: string;
  height?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  type,
  text,
  fontSize = "body-5",
  width = "w-36",
  height = "h-12",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  const buttonStyles = {
    passwordReset: {
      text: "text-grey-400",
      underline: "underline",
      hover: "hover:text-border",
    },
    signupEmail: {
      text: "text-grey-700",
      underline: "",
      hover: "hover:text-grey-400 hover:underline",
    },
    resend: {
      text: "text-grey-400",
      underline: "underline",
      hover: "hover:text-border",
    },
  };

  const currentStyle = buttonStyles[type];
  const typeClasses = `${currentStyle.text} ${currentStyle.underline} ${currentStyle.hover}`;
  const fontSizeClass = `text-${fontSize}`;

  const baseClasses = `flex items-center justify-center rounded-lg focus:outline-none disabled:cursor-not-allowed cursor-pointer underline-offset-4 ${width} ${height}`;

  const finalClasses = `${typeClasses} ${fontSizeClass} ${baseClasses} ${className}`;

  return (
    <button
      className={finalClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
