import clsx from "clsx";
import { ReactNode } from "react";

type TitleProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
};

export const Title = ({ level = 1, children, className }: TitleProps) => {
  const HeadingElement = TITLE_TAG[level];

  // --- RENDER ---

  return (
    <HeadingElement className={clsx("text-neutral-900 font-bold ", className)}>
      {children}
    </HeadingElement>
  );
};

const TITLE_TAG = {
  "1": (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className={clsx(props.className, "text-3xl lg:text-4xl")} />
  ),
  "2": (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className={clsx(props.className, "text-2xl lg:text-3xl")} />
  ),
  "3": (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className={clsx(props.className, "text-xl lg:text-2xl")} />
  ),
  "4": (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 {...props} className={clsx(props.className, "text-lg lg:text-xl")} />
  ),
  "5": (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 {...props} className={clsx(props.className, "text-base lg:text-lg")} />
  ),
  "6": (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 {...props} className={clsx(props.className, "text-sm lg:text-base")} />
  ),
};
