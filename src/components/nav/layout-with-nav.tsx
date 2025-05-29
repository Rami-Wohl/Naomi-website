"use client";

import { type ReactNode } from "react";
import NavComponents from "./nav-container";
import { NavProvider } from "~/context/nav-context";
import { type Locale } from "~/i18n/routing";

export const LayoutWithNav = ({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) => {
  return (
    <>
      <NavProvider>
        <NavComponents locale={locale} />
        <main className="relative flex min-h-screen w-full flex-col items-center bg-white bg-opacity-60 font-sans">
          {children}
        </main>
      </NavProvider>
    </>
  );
};
