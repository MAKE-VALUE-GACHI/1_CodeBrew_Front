import { ProgressBarProps } from "@/types/components/commons/ProgressBar";

const CommonProgressBar = ({
  barHeight = "10px",
  progress,
}: ProgressBarProps) => {
  return (
    <>
      <div className={`w-full overflow-hidden rounded-full bg-background`}>
        <div
          className='h-full rounded-full bg-primary-300 transition-all duration-300 ease-in-out'
          style={{ width: `${progress}%`, height: barHeight }}
        />
      </div>
    </>
  );
};

export default CommonProgressBar;
