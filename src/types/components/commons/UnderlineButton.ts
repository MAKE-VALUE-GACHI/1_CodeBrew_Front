import { FontSizeType } from "@/constants/design";

export interface UnderlineButtonProps {
  type: "passwordReset" | "signupEmail" | "resend";
  text: string;
  font?: FontSizeType;
  width?: number;
  height?: number;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}
