import { ButtonHTMLAttributes, ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  children: ReactNode;
}

const Button = ({
  className = "",
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "px-4 py-2 font-medium text-sm rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const defaultClasses =
    "bg-gray-200 hover:bg-gray-700 hover:text-white focus:ring-gray-200";

  const combinedClasses = twMerge(baseClasses, defaultClasses, className);

  return (
    <button className={combinedClasses} {...props}>
      <div className="flex items-center justify-center gap-2">
        {LeftIcon && <LeftIcon size={16} />}
        {children}
        {RightIcon && <RightIcon size={16} />}
      </div>
    </button>
  );
};

export default Button;
