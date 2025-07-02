import { CheckBoxProps } from "@/types/components/commons/CheckBox";

export default function CheckBox({
  id,
  text,
  containerWidth = 128,
  containerHeight = 30,
  boxSize = 32,
  isChecked,
  onCheck,
  font = "body-4",
  className = "",
}: CheckBoxProps) {
  const containerClasses = `flex items-center gap-2 rounded-lg cursor-pointer ${className}`;
  const inputClasses = `flex-shrink-0 cursor-pointer appearance-none rounded-lg 
    ${isChecked ? "checked:bg-[url('/icons/checked.svg')]" : "bg-[url('/icons/uncheck.svg')]"} bg-center bg-no-repeat `;

  return (
    <div
      className={containerClasses + "cursor-pointer"}
      style={{
        height: `${containerHeight}px`,
        width: `${containerWidth}px`,
      }}
    >
      <input
        type='checkbox'
        id={id}
        checked={isChecked}
        onChange={onCheck}
        style={{
          height: `${boxSize}px`,
          width: `${boxSize}px`,
        }}
        className={inputClasses}
      />
      <label htmlFor={id}>
        <span className={`text-${font} cursor-pointer`}>{text}</span>
      </label>
    </div>
  );
}
