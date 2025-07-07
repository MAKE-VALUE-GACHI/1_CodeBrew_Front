import { MenuItemProps } from "@/types/components/commons/MenuItem";

export default function MenuItem({
  type,
  text,
  font = "body-5",
  width = 144,
  height = 48,
  onClick,
  className = "",
}: MenuItemProps) {
  const baseClasses = `flex items-center justify-center rounded-lg focus:outline-none disabled:cursor-not-allowed cursor-pointer bg-white text-grey-400 hover:bg-primary-50 truncate text-${font}`;

  const finalClasses = `${baseClasses} ${className}`;

  return (
    <div
      className={finalClasses}
      onClick={onClick}
      style={{
        width: `${type === "basic" ? "100%" : `${width}px`}`,
        height: `${height}px`,
      }}
    >
      {text}
    </div>
  );
}
