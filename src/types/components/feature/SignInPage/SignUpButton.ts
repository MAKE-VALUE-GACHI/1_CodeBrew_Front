import { FontSizeType } from "@/constants/design";

export interface SignupButtonProps {
  type: ButtonType;
  font?: FontSizeType;
  iconSize?: number;
}

export type ButtonType = "kakao" | "naver" | "facebook" | "google" | "phone";
