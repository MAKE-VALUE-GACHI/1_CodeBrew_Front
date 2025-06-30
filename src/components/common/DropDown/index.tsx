"use client";

import { useState, useRef, useEffect } from "react";
import MenuItem from "../MenuItem";
import { MenuItemProps } from "../MenuItem/type";

interface DropDownProps {
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

export default function DropDown({
  type = "basic",
  items,
  placeholder,
  selectedIndex = null,
  width = "w-64",
  height = "h-16",
  font = "body-5",
  onSelect,
  className = "",
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedIndex ?? null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemSelect = (idx: number) => {
    setSelected(idx);
    setIsOpen(false);
    onSelect?.(idx);
  };

  return (
    <div
      ref={ref}
      className={`relative ${type === "basic" ? "w-full" : width} ${className}`}
    >
      <div
        className={`flex items-center justify-between rounded-xl border border-border bg-white px-6 ${height} cursor-pointer hover:border-primary-500 ${isOpen && "border-primary-500"}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className={`text-grey-400 text-${font} truncate`}>
          {selected !== null ? items[selected]?.text : placeholder}
        </span>

        {/* 아이콘 */}
        <span className='ml-2 text-grey-800'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5 8L10 13L15 8'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <div
          className={`absolute left-0 top-full z-10 mt-2 w-full rounded-xl bg-white shadow-[4px_4px_8px_rgba(0,0,0,0.05)]`}
        >
          {items.map((item, idx) => (
            <MenuItem
              key={item.text + idx}
              {...item}
              type={item.type}
              text={item.text}
              font={font}
              width='w-full'
              onClick={() => handleItemSelect(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
