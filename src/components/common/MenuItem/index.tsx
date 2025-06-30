import { FontSizeType } from "@/constants/design";

interface MenuItemProps {
  type: "itemBasic" | "itemSmall";
  text: string;
  font?: FontSizeType;
  width?: string;
  height?: string;
  onClick?: () => void;
  className?: string;
}

export default function MenuItem({
  type,
  text,
  font = "body-5",
  width = "w-36",
  height = "h-12",
  onClick,
  className = "",
}: MenuItemProps) {
  const baseClasses = `flex items-center justify-center rounded-lg focus:outline-none disabled:cursor-not-allowed cursor-pointer bg-white text-grey-400 hover:bg-primary-50 ${width} ${height} text-${font} ${type === "itemBasic" && "w-full"}`;

  const finalClasses = ` ${baseClasses} ${className}`;

  return (
    <div
      className={finalClasses}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
