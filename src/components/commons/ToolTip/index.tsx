import { ToolTipProps } from "@/types/components/commons/ToolTip";

const CommonToolTip = ({
  children,
  description,
  position = "top",
}: ToolTipProps) => {
  // position은 'top', 'bottom', 'left', 'right' 중 하나로 설정할 수 있습니다.
  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "left-1/2 -translate-x-1/2 bottom-full mb-2";
      case "bottom":
        return "left-1/2 -translate-x-1/2 top-full mt-2";
      case "left":
        return "right-full mr-2 top-1/2 -translate-y-1/2";
      case "right":
        return "left-full ml-2 top-1/2 -translate-y-1/2";
      default:
        return "left-1/2 -translate-x-1/2 bottom-full mb-2";
    }
  };

  return (
    <div className='group relative w-max'>
      <span
        role='tooltip-trigger'
        aria-describedby='tooltip-description'
        className='cursor-pointer rounded-[8px] bg-grey-800 px-3 py-1.5 text-caption text-white transition-colors hover:bg-grey-700'
      >
        {children}
      </span>
      <div
        className={`absolute z-10 hidden w-max max-w-xs rounded bg-grey-800 px-3 py-2 text-caption text-white group-hover:block ${getPositionClasses()}`}
      >
        {description}
      </div>
    </div>
  );
};

export default CommonToolTip;
