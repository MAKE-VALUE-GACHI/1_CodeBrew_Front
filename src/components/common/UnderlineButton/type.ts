import { FontSizeType } from "@/constants/design";

export interface UnderlineButtonProps {
  type: "passwordReset" | "signupEmail" | "resend";
  text: string;
  font?: FontSizeType;
  width?: string;
  height?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}
