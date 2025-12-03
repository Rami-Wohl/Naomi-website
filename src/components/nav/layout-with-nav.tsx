"use client";

import { type ReactNode } from "react";
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
  const { isOnTop } = useScrollPosition();

  return (
    <NavProvider>
      <NavComponents locale={locale} isOnTop={isOnTop} />
      <main className="relative flex min-h-full w-full flex-col items-center bg-white bg-opacity-70 font-sans">
        <div className="flex h-full w-screen flex-col items-center">
          <div
            className={`bg-contrast relative flex h-full w-full flex-col items-center bg-opacity-10 px-2 font-sans`}
          >
            {children}
          </div>
        </div>
      </main>
    </NavProvider>
  );
};
