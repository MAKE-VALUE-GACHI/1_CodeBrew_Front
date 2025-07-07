import { UnderlineButtonProps } from "@/types/components/commons/UnderlineButton";

export default function UnderlineButton({
  type,
  text,
  font = "body-5",
  width = 144,
  height = 48,
  disabled = false,
  onClick,
  className = "",
}: UnderlineButtonProps) {
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

  const baseClasses = `flex items-center justify-center rounded-lg focus:outline-none disabled:cursor-not-allowed cursor-pointer underline-offset-4 truncate text-${font}`;

  const finalClasses = `${typeClasses} ${baseClasses} ${className}`;

  return (
    <button
      className={finalClasses}
      onClick={onClick}
      disabled={disabled}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {text}
    </button>
  );
}
