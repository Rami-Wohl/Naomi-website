import "~/styles/globals.css";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { LayoutWithNav } from "~/components/nav/layout-with-nav";
import { Montserrat, Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // adjust as needed
  variable: "--font-raleway", // optional: for Tailwind integration
});

const main = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "House of Shakti",
  description: "Gecertificeerd Kundalini expert",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${GeistSans.variable}`}>
      <body
        className={`${raleway.variable} ${main.variable} font-roboto h-screen bg-white bg-cover bg-fixed bg-center bg-no-repeat`}
        style={{
          backgroundImage: "url('assets/images/mandala-gold.jpg')",
        }}
      >
        <NextIntlClientProvider>
          <LayoutWithNav locale={locale}>{children}</LayoutWithNav>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
