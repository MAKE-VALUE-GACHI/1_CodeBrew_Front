import { MenuItemProps } from "../MenuItem/type";

export interface DropDownProps {
  type: "basic" | "small";
  items: Omit<MenuItemProps, "onClick">[];
  placeholder: string;
  selectedIndex?: number | null;
  width?: string;
  height?: string;
  font?: MenuItemProps["font"];
  onSelect?: (index: number) => void;
  className?: string;
}
