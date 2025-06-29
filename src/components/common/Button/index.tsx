interface ButtonProps {
  type:
    | "gnbLogin"
    | "signupLogin"
    | "checkBasic"
    | "basicMiddle"
    | "basicSmall"
    | "aiRecommend";
  text: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  type,
  text,
  width = "w-24",
  height = "h-24",
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
        "disabled:bg-background disabled:border-none disabled:text-gray-300",
      active: "",
    },
    checkBasic: {
      background: "bg-yellow-600",
      text: "text-white",
      border: "",
      hover: "hover:bg-purple-700",
      disabled:
        "disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-500",
      active: "",
    },
    basicMiddle: {
      background: "bg-green-600",
      text: "text-gray-700",
      border: "",
      hover: "hover:bg-gray-200",
      disabled: "",
      active: "active:bg-gray-300",
    },
    basicSmall: {
      background: "bg-blue-600",
      text: "text-gray-600",
      border: "",
      hover: "hover:bg-gray-50",
      disabled: "",
      active: "",
    },
    aiRecommend: {
      background: "bg-purple-600",
      text: "text-white",
      border: "",
      hover: "hover:from-purple-600 hover:to-pink-600",
      disabled: "",
      active: "",
    },
  };

  const currentStyle = buttonStyles[type];
  const typeClasses = `${currentStyle.background} ${currentStyle.text} ${currentStyle.border} ${currentStyle.hover} ${currentStyle.disabled} ${currentStyle.active}`;

  const baseClasses = `flex items-center justify-center rounded-lg focus:outline-none disabled:cursor-not-allowed cursor-pointer ${width} ${height}`;

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
