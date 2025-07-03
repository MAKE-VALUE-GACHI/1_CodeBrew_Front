import { ProgressBarProps } from "@/types/components/commons/ProgressBar";

const CommonProgressBar = ({
  barHeight = "h-2.5",
  progress,
}: ProgressBarProps) => {
  return (
    <>
      <div
        className={`h-${barHeight} w-full overflow-hidden rounded-full bg-background`}
      >
        <div
          className='h-full rounded-full bg-primary-300 transition-all duration-300 ease-in-out'
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
};

export default CommonProgressBar;
