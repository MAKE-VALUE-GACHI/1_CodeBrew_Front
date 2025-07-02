import { MenuItemProps } from "./MenuItem";

export interface DropDownProps {
  type: "basic" | "small";
  items: Omit<MenuItemProps, "onClick">[];
  placeholder: string;
  selectedIndex?: number | null;
  width?: number;
  height?: number;
  font?: MenuItemProps["font"];
  onSelect?: (index: number) => void;
  className?: string;
}
