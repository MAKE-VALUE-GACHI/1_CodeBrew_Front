"use client";

import { InputProps } from "@/types/components/commons/input";
import InputDeleteIcon from "./inputDeleteIcon";
import InputVisibleIcon from "./inputVisibleIcon";
import { useState } from "react";

/**
 * Input Component
 * @param type - 인풋의 타입을 설정합니다. type: default, error
 * @param text, setText - 유저로부터 입력받은 텍스트를 관리합니다. useState의 형태로 관리합니다.
 * @param iconType - 인풋의 아이콘 타입을 설정합니다. iconType: text, password
 * - text: 오른쪽에 삭제 아이콘이 표시됩니다.
 * - password: 오른쪽에 비밀번호 보기, 가리기 아이콘이 표시됩니다.
 * @param iconSize - 인풋의 아이콘 크기를 설정합니다. 기본은 18px 입니다.
 * @param isRequired - true인 경우, label 옆에 인디케이터를 나타냅니다.
 * @param className - 인풋의 컨테이너에 적용되는 커스텀 클래스를 설정합니다.
 */

export default function Input({
  type,
  id,
  label,
  placeholder,
  text,
  setText,
  font = "body-5",
  iconType = "text",
  iconSize = 18,
  isRequired = false,
  className = "",
}: InputProps) {
  const [isVisible, setIsVisible] = useState(false);

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
        className='flex cursor-pointer items-center gap-1'
      >
        {isRequired && <span className='text-primary-500'>*</span>}
        {label}
      </label>
      <div className={`relative rounded-lg ${currentStyle.border}`}>
        <input
          id={id}
          className={typeClasses}
          placeholder={placeholder}
          value={text}
          onChange={e => setText(e.target.value)}
          type={
            iconType === "password" ? (isVisible ? "text" : "password") : "text"
          }
        />
        {iconType === "text" ? (
          <InputDeleteIcon
            iconSize={iconSize}
            text={text}
            setText={setText}
          />
        ) : (
          <InputVisibleIcon
            iconSize={iconSize}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        )}
      </div>
    </div>
  );
}
