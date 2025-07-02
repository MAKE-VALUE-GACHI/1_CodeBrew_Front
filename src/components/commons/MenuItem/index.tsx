import { MenuItemProps } from "@/types/components/commons/MenuItem";

export default function MenuItem({
  type,
  text,
  font = "body-5",
  width = "w-36",
  height = "h-12",
  onClick,
  className = "",
}: MenuItemProps) {
  const baseClasses = `flex items-center justify-center rounded-lg focus:outline-none disabled:cursor-not-allowed cursor-pointer bg-white text-grey-400 hover:bg-primary-50 truncate  ${width} ${height} text-${font} ${type === "basic" && "w-full"}`;

  const finalClasses = `${baseClasses} ${className}`;

  return (
    <div
      className={finalClasses}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
