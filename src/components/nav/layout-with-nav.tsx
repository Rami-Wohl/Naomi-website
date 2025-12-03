"use client";

import { useRef, type ReactNode } from "react";
import NavComponents from "./nav-container";
import { NavProvider } from "~/context/nav-context";
import { type Locale } from "~/i18n/routing";
import useScrollPosition from "~/hooks/use-scroll-position";

export const LayoutWithNav = ({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isOnTop } = useScrollPosition(scrollRef);

  return (
    <NavProvider>
      <NavComponents locale={locale} isOnTop={isOnTop} />
      <main className="relative flex min-h-screen w-full flex-col items-center bg-white bg-opacity-70 font-sans">
        <div className="flex h-screen w-screen flex-col items-center">
          <div
            ref={scrollRef}
            className={`bg-contrast relative flex h-full w-full flex-col items-center overflow-y-scroll bg-opacity-10 px-2 font-sans`}
          >
            {children}
          </div>
        </div>
      </main>
    </NavProvider>
  );
};
