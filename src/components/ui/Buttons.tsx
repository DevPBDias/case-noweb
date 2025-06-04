import Link from "next/link";

interface ButtonProps {
  leftIcon?: boolean;
  rightIcon?: boolean;
  icon?: React.ReactNode;
  path?: string;
  className?: string;
  text?: string;
}

const ButtonWithIcon = ({
  icon,
  leftIcon,
  rightIcon,
  path,
  className,
  text,
}: ButtonProps) => {
  return (
    <Link
      href={path || ""}
      className={`${className} flex flex-row items-center justify-center gap-[10px] px-5 py-[10px] rounded-[40px] transition-all duration-300`}
    >
      {rightIcon && icon}
      <p className="text-white text-base/[130.8%] font-semibold">{text}</p>
      {leftIcon && icon}
    </Link>
  );
};

const ButtonOnlyIcon = ({ icon, path, className }: ButtonProps) => {
  return (
    <Link
      href={path || ""}
      className={`cursor-pointer ${className} rounded-full flex items-center justify-center transition-all duration-300`}
    >
      {icon && icon}
    </Link>
  );
};

export { ButtonWithIcon, ButtonOnlyIcon };
