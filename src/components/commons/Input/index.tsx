import { FontSizeType } from "@/constants/design";
import Image from "next/image";

interface InputProps {
  type: "default" | "error";
  id: string;
  label: string;
  placeholder: string;
  text: string;
  setText: (text: string) => void;
  font?: FontSizeType;
  className?: string;
}

export default function Input({
  type,
  id,
  label,
  placeholder,
  text,
  setText,
  font = "body-5",
  className = "",
}: InputProps) {
  const inputStyles = {
    default: {
      background: "bg-background",
      text: "text-grey-800 placeholder:text-grey-300",
      focus: "focus:outline focus:outline-2 focus:outline-grey-600",
      border: "border-b border-border",
    },
    error: {
      background: "bg-caution/10",
      text: "text-grey-800 placeholder:text-grey-300",
      focus: "focus:bg-white focus:outline-none",
      border: "border border-caution",
    },
  };

  const containerClasses = `flex flex-col gap-2 justify-center text-${font} ${className}`;

  const baseClasses = `py-3 px-4 rounded-lg w-full`;
  const currentStyle = inputStyles[type];
  const typeClasses = `${baseClasses} ${currentStyle.background} ${currentStyle.text} ${currentStyle.focus}`;

  return (
    <div className={containerClasses}>
      <label
        htmlFor={id}
        className='cursor-pointer'
      >
        {label}
      </label>
      <div className={`relative rounded-lg ${currentStyle.border}`}>
        <input
          id={id}
          className={typeClasses}
          placeholder={placeholder}
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Image
          src='/icons/circleX.svg'
          alt='clear'
          className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer'
          width={18}
          height={18}
          style={{ display: text.length === 0 ? "none" : "block" }}
          onClick={() => setText("")}
        />
      </div>
    </div>
  );
}
