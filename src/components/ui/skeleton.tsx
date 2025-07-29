import { twMerge } from "tailwind-merge";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={twMerge(
        "animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-4",
        className
      )}
      {...props}
    />
  );
};

export default Skeleton;
