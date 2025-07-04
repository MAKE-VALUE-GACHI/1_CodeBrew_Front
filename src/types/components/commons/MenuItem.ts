import { FontSizeType } from "@/constants/design";

export interface MenuItemProps {
  type: "basic" | "small";
  text: string;
  font?: FontSizeType;
  width?: number;
  height?: number;
  onClick?: () => void;
  className?: string;
}
