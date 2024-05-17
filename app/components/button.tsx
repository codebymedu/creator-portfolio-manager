import clsx from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
};

export const Button = ({
  children,
  type = "button",
  className,
}: ButtonProps) => (
  <button
    className={clsx(
      "bg-neutral-800 hover:bg-neutral-900 text-white px-8 py-2 rounded-md duration-75",
      className
    )}
    type={type}
  >
    {children}
  </button>
);
