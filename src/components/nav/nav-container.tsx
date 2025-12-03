/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import { NavLink } from "./nav-link";
import { useNavContext } from "~/context/nav-context";
import BurgerMenuIcon from "../icons/burgermenu-icon";
import { useTranslations } from "next-intl";
import { I18nToggle } from "../intl/i18n-toggle";
import { usePathname } from "~/i18n/navigation";
import { type Locale } from "~/i18n/routing";
import { LogoCard } from "./logo";

const routes = {
  welkom: "/",
  over: "/over",
  kundalini: "/kundalini",
  ttc: "/ttc",
  faq: "/faq",
  prices: "/prijzen",
  contact: "/contact",
};

const NavComponents = ({
  locale,
  isOnTop,
}: {
  locale: Locale;
  isOnTop: boolean;
}) => {
  const {
    mobileMenuRef,
    mobileMenuHandlerRef,
    isMobileMenuVisible,
    setMobileMenuVisible,
  } = useNavContext();

  const path = usePathname();

  console.log({ isOnTop });

  const t = useTranslations("navigation");

  useEffect(() => {
    setMobileMenuVisible(false);
  }, [setMobileMenuVisible, path]);

  return (
    <div className="relative">
      <nav
        ref={mobileMenuRef}
        className={`bg-contrast fixed left-0 top-0 z-[2] flex h-[calc(100%-55px)] flex-col items-center justify-between border-r-2 border-[#545c68] border-opacity-10 text-left ${
          isMobileMenuVisible ? "translate-x-0" : "-translate-x-full"
        } min-h-full w-full pt-[55px] transition-transform duration-500 ease-in-out lg:w-80`}
      >
        <div className="flex h-full w-full flex-col justify-center">
          <NavLink
            href={routes.welkom}
            title={t("home")}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.over}
            title={t("about")}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.kundalini}
            title={t("kundalini")}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.ttc}
            title={t("ttc")}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.prices}
            title={t("prices")}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.faq}
            title={t("faq")}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.contact}
            title={t("contact")}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <div className="border-b border-dotted" />
        </div>
      </nav>
      <div
        className={`fixed z-10 w-full transition-transform duration-500 ease-in-out`}
      >
        <div
          className={`bg-contrast relative flex h-[80px] items-center justify-between transition-all duration-500 ${isOnTop ? "bg-opacity-0" : "bg-opacity-100"} px-4 py-1`}
        >
          <div ref={mobileMenuHandlerRef}>
            <button
              className="z-10 mr-auto flex h-10 w-10 scale-75 cursor-pointer flex-col justify-around border-none p-0"
              onClick={() => {
                setMobileMenuVisible(!isMobileMenuVisible);
              }}
              tabIndex={1}
            >
              <BurgerMenuIcon
                className={`stroke-gold`}
                height={45}
                width={45}
              />{" "}
            </button>
          </div>
          <LogoCard />
          <I18nToggle locale={locale} path={path} />
        </div>
      </div>
    </div>
  );
};

export default NavComponents;
