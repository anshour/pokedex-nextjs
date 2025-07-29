import { twMerge } from "tailwind-merge";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Badge = ({ className, ...props }: BadgeProps) => {
  return (
    <div
      className={twMerge(
        "inline-block bg-white/20 text-white px-2 sm:px-3 py-1 rounded-xl text-xs m-1",
        className
      )}
      {...props}
    />
  );
};

export default Badge;
