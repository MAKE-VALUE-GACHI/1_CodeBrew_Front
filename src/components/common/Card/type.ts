import { FontSizeType } from "@/constants/design";

export interface CardProps {
  title: string;
  description: string;
  font?: FontSizeType;
  width?: string;
  height?: string;
  onClick?: () => void;
  className?: string;
}
