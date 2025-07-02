import { ButtonProps } from "@/types/components/commons/Button";

export default function Button({
  type,
  text,
  font = "body-5",
  width = "w-36",
  height = "h-12",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  const buttonStyles = {
    gnbLogin: {
      background: "bg-white",
      text: "text-grey-800",
      border: "border border-border",
      hover: "hover:bg-background hover:text-grey-600",
      disabled: "",
      active: "",
    },
    signupLogin: {
      background: "bg-primary-500",
      text: "text-white",
      border: "border border-black",
      hover: "hover:border-none hover:bg-primary-600",
      disabled:
        "disabled:bg-background disabled:border-none disabled:text-grey-300",
      active: "",
    },
    checkBasic: {
      background: "bg-primary-500",
      text: "text-white",
      border: "",
      hover: "hover:bg-primary-600",
      disabled: "disabled:bg-background disabled:text-grey-300",
      active: "",
    },
    basicMiddle: {
      background: "bg-background",
      text: "text-grey-300",
      border: "",
      hover: "hover:bg-border",
      disabled: "",
      active:
        "active:bg-white active:text-grey-700 active:border active:border-primary-500",
    },
    basicSmall: {
      background: "bg-white",
      text: "text-grey-700",
      border: "",
      hover: "hover:bg-background hover:text-grey-600",
      disabled: "",
      active: "",
    },
    aiRecommend: {
      background: "bg-white",
      text: "text-grey-600",
      border: "border border-primary-100",
      hover:
        "hover:bg-primary-50 hover:text-primary-500 hover:border-primary-500",
      disabled: "",
      active: "",
    },
  };

  const currentStyle = buttonStyles[type];
  const typeClasses = `${currentStyle.background} ${currentStyle.text} ${currentStyle.border} ${currentStyle.hover} ${currentStyle.disabled} ${currentStyle.active}`;

  const baseClasses = `flex items-center justify-center rounded-lg focus:outline-none disabled:cursor-not-allowed cursor-pointer truncate ${width} ${height} text-${font}`;

  const finalClasses = `${typeClasses} ${baseClasses} ${className}`;

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
