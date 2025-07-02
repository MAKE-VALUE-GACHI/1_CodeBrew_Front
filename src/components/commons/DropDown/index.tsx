"use client";

import { useState, useRef, useEffect } from "react";
import MenuItem from "../MenuItem";
import Image from "next/image";
import { DropDownProps } from "@/types/components/commons/DropDown";

export default function DropDown({
  type = "basic",
  items,
  placeholder,
  selectedIndex = null,
  width = 256,
  height = 64,
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
      className={`relative ${className}`}
      style={{ width: `${type === "basic" ? "100%" : `${width}px`}` }}
    >
      <div
        className={`flex cursor-pointer items-center justify-between rounded-xl border border-border bg-white px-6 hover:border-primary-500 ${isOpen && "border-primary-500"}`}
        onClick={() => setIsOpen(prev => !prev)}
        style={{ height: `${height}px` }}
      >
        <span className={`text-grey-400 text-${font} w-80% truncate`}>
          {selected !== null ? items[selected]?.text : placeholder}
        </span>

        <span
          className={`ml-2 flex-shrink-0 text-grey-800 ${isOpen ? "rotate-180" : ""} transition-transform duration-300`}
        >
          <Image
            src='/icons/under.svg'
            alt='under'
            width={21}
            height={21}
          />
        </span>
      </div>

      {/* 드롭다운 메뉴 */}
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
