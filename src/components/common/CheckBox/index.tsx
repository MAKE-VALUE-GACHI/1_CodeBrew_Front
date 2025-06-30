import { CheckBoxProps } from "./type";

export default function CheckBox({
  id,
  text,
  containerWidth = 48,
  containerHeight = 30,
  boxSize = 32,
  isChecked,
  onCheck,
  font = "body-4",
  className = "",
}: CheckBoxProps) {
  const containerClasses = `flex items-center h-[${containerHeight}px] w-[${containerWidth}px] gap-2 rounded-lg ${className} cursor-pointer`;
  const inputClasses = `h-[${boxSize}px] w-[${boxSize}px] flex-shrink-0 cursor-pointer appearance-none rounded-lg 
    ${isChecked ? "checked:bg-[url('/icons/checked.svg')]" : "bg-[url('/icons/uncheck.svg')]"} bg-center bg-no-repeat`;

  return (
    <div className={containerClasses + "cursor-pointer"}>
      <input
        type='checkbox'
        id={id}
        checked={isChecked}
        onChange={onCheck}
        className={inputClasses}
      />
      <label htmlFor={id}>
        <span className={`text-${font} cursor-pointer`}>{text}</span>
      </label>
    </div>
  );
}
