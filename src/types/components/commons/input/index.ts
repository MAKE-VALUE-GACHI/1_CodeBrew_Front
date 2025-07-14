import { PhoneSignInForm } from "@/app/(auth)/sign-in/phone/page";
import { FontSizeType } from "@/constants/design";
import { UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";

export interface InputProps {
  type: "default" | "error";
  id: string;
  label: string;
  placeholder: string;
  font?: FontSizeType;
  iconType?: "text" | "password";
  iconSize?: number;
  isRequired?: boolean;
  className?: string;
  text?: string;
  setText?: UseFormSetValue<PhoneSignInForm>;
  register?: UseFormRegisterReturn;
}
