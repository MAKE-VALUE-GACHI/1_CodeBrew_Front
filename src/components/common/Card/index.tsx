import { CardProps } from "./type";

export default function Card({
  title,
  description,
  font = "caption",
  width = "w-100",
  height = "h-24",
  onClick,
  className = "",
}: CardProps) {
  const baseClasses = `flex flex-col  justify-center 
  rounded-lg bg-primary-50 p-6
  focus:outline-none disabled:cursor-not-allowed truncate ${width} ${height} text-${font}`;

  const finalClasses = `${baseClasses} ${className}`;

  return (
    <section
      className={finalClasses}
      onClick={onClick}
    >
      <strong className='text-primary-800'>{title}</strong>
      <p className='text-grey-600'>{description}</p>
    </section>
  );
}
