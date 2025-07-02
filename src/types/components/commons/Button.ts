import { FontSizeType } from "@/constants/design";

export interface ButtonProps {
  type:
    | "gnbLogin"
    | "signupLogin"
    | "checkBasic"
    | "basicMiddle"
    | "basicSmall"
    | "aiRecommend";
  text: string;
  font?: FontSizeType;
  width?: string;
  height?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}
