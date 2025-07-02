import { FontSizeType } from "@/constants/design";

export interface MenuItemProps {
  type: "itemBasic" | "itemSmall";
  text: string;
  font?: FontSizeType;
  width?: string;
  height?: string;
  onClick?: () => void;
  className?: string;
}
