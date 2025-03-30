import { type ReactNode } from "react";

function WelcomeBanner() {
  return (
    <h1 className="my-6 flex w-full flex-row items-center justify-between">
      <span className="mx-4 w-full text-center text-lg font-semibold lg:text-xl"></span>
    </h1>
  );
}

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
      className={`relative flex h-full w-full flex-col items-center overflow-y-scroll bg-amber-950 bg-opacity-70 px-2 font-sans text-amber-950`}
    >
      <div
        className={`my-16 flex w-full flex-col items-center justify-center rounded-lg bg-amber-50 p-8 pt-0 font-sans text-amber-950 lg:max-w-[1100px] lg:p-8 lg:pt-0 ${size === "normal" ? "lg:w-full" : "lg:w-fit"}`}
      >
        <WelcomeBanner />
        <h1 className="mb-8 w-full text-center text-2xl uppercase lg:text-3xl">
          {title}
        </h1>
        <div className="flex w-full flex-col gap-6 text-center">{children}</div>
      </div>
    </div>
  );
};
