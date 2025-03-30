import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { LayoutWithNav } from "~/components/nav/layout-with-nav";

export const metadata: Metadata = {
  title: "Naomi Kundalini",
  description: "Beschrijving hier TODO",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="h-screen bg-white bg-cover bg-fixed bg-center bg-no-repeat">
        <LayoutWithNav>{children}</LayoutWithNav>
      </body>
    </html>
  );
}
