import { FontSizeType } from "@/constants/design";

export interface CardProps {
  title: string;
  description: string;
  font?: FontSizeType;
  width?: number;
  height?: number;
  onClick?: () => void;
  className?: string;
}
