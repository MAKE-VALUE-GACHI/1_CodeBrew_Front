import { FontSizeType } from "@/constants/design";

export interface CheckBoxProps {
  id: string;
  text: string;
  font?: FontSizeType;
  containerWidth?: number;
  containerHeight?: number;
  boxSize?: number;
  isChecked: boolean;
  onCheck?: () => void;
  className?: string;
}
