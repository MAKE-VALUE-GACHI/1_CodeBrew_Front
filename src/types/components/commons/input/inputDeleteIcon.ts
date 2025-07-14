import { PhoneSignInForm } from "@/app/(auth)/sign-in/phone/page";
import { UseFormSetValue } from "react-hook-form";

export interface InputDeleteIconProps {
  iconSize: number;
  text: string | undefined;
  setText: UseFormSetValue<PhoneSignInForm> | undefined;
}
