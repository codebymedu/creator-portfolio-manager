import clsx from "clsx";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => (
  <div
    className={clsx(
      "bg-neutral-800 text-white rounded-md px-8 py-6 ",
      className
    )}
  >
    {children}
  </div>
);
