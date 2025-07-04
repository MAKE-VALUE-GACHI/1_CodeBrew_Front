import { FontSizeType } from "@/constants/design";

export interface InputProps {
  type: "default" | "error";
  id: string;
  label: string;
  placeholder: string;
  text: string;
  setText: (text: string) => void;
  font?: FontSizeType;
  iconType?: "text" | "password";
  iconSize?: number;
  isRequired?: boolean;
  className?: string;
}
