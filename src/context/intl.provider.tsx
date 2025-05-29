"use client";

import { NextIntlClientProvider } from "next-intl";
import { type ReactNode } from "react";

export default function Providers({
  children,
  messages,
  locale,
}: {
  children: ReactNode;
  messages: Record<string, unknown>;
  locale: string;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
