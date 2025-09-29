import { type ReactNode } from "react";

export const ContentSection = ({
  children,
  title,
  size = "normal",
}: {
  children: ReactNode;
  title: string;
  size?: "normal" | "large";
}) => {
  return (
    <div
      className={`my-20 flex w-full flex-col items-center justify-center rounded-lg bg-emerald-50 bg-opacity-20 p-8 pt-0 font-sans text-emerald-50 lg:max-w-[1100px] lg:p-8 lg:pt-0 ${size === "normal" ? "lg:w-full" : "lg:w-fit"}`}
    >
      <h1 className="font-raleway mt-8 w-full text-center text-2xl text-[1.1rem] font-light tracking-[0.1rem] lg:mb-8 lg:mt-10 lg:text-4xl">
        {title}
      </h1>
      <div className="mt-6 flex w-full flex-col gap-6 text-center">
        {children}
      </div>
    </div>
  );
};
