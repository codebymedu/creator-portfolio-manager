import clsx from "clsx";
import { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  handleClick?: () => void;
  type?: "button" | "submit";
  href?: string;
};

export const Button = ({
  children,
  type = "button",
  handleClick,
  className,
  href,
}: ButtonProps) => {
  const buttonClasses = clsx(
    "bg-neutral-900 hover:bg-neutral-800 text-white p-3 lg:p-2 rounded-md duration-75 text-xl lg:text-base",
    className
  );

  return href ? (
    <Link href={href} className={buttonClasses}>
      {children}
    </Link>
  ) : (
    <button onClick={handleClick} className={buttonClasses} type={type}>
      {children}
    </button>
  );
};
