import { CardProps } from "@/types/components/commons/Card";

export default function Card({
  title,
  description,
  font = "caption",
  width = 400,
  height = 96,
  onClick,
  className = "",
}: CardProps) {
  const baseClasses = `flex flex-col  justify-center 
  rounded-lg bg-primary-50 p-6 gap-0.5
  focus:outline-none disabled:cursor-not-allowed truncate text-${font}`;

  const finalClasses = `${baseClasses} ${className}`;

  return (
    <section
      className={finalClasses}
      onClick={onClick}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <p className='text-primary-800'>{title}</p>
      <p className='text-grey-600'>{description}</p>
    </section>
  );
}
