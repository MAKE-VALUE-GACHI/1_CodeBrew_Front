interface ButtonProps {
  type: "passwordReset" | "signupEmail" | "resend";
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
      text: "text-grey-600",
      underline: "underline",
      hover: "hover:text-grey-600 hover:underline",
    },
  };

  const currentStyle = buttonStyles[type];
  const typeClasses = `${currentStyle.text} ${currentStyle.underline} ${currentStyle.hover}`;

  const baseClasses = `flex items-center justify-center rounded-lg focus:outline-none disabled:cursor-not-allowed cursor-pointer underline-offset-4 ${width} ${height}`;

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
