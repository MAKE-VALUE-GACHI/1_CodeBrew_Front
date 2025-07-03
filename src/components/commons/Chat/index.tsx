"use client";

import { FontSizeType } from "@/constants/design";
import TextareaAutosize from "react-textarea-autosize";

interface ChatProps {
  width?: number;
  minRows?: number;
  maxRows?: number;
  placeholder: string;
  font?: FontSizeType;
  text: string;
  setText: (text: string) => void;
  className?: string;
}

export default function Chat({
  width = 600,
  minRows = 3,
  maxRows = 6,
  placeholder,
  font = "body-5",
  text,
  setText,
  className = "",
}: ChatProps) {
  const textareaClass = `
    resize-none rounded-lg p-2 bg-white/60 placeholder:text-grey-300 text-grey-800 w-full
    focus:outline-none focus:ring-0 text-${font} ${className}
  `;

  return (
    <div
      className='gradient-border px-2 py-3'
      style={{ width }}
    >
      <TextareaAutosize
        minRows={minRows}
        maxRows={maxRows}
        placeholder={placeholder}
        className={textareaClass}
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  );
}
