import { twMerge } from "tailwind-merge";

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  color: "green" | "red";
}

const Progress = ({ value, max = 100, className, color }: ProgressProps) => {
  const clampedValue = Math.min(Math.max(0, value), max);
  const percentage = (clampedValue / max) * 100;

  const colorClasses = {
    green: "bg-green-600",
    red: "bg-red-600",
  };

  const containerClassName = twMerge(
    "w-full bg-gray-200 rounded-full overflow-hidden h-1",
    className
  );

  const progressBarClassName = twMerge(
    "h-full transition-all duration-300 ease-out rounded-full",
    colorClasses[color],
    className
  );

  return (
    <div className="w-full">
      <div className={containerClassName}>
        <div
          className={progressBarClassName}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};

export default Progress;
