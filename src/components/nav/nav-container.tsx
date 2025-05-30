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

const routes = {
  welkom: "/",
  over: "/over",
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

  const t = useTranslations("navigation");

  useEffect(() => {
    setMobileMenuVisible(false);
  }, [setMobileMenuVisible, path]);

  return (
    <div className="relative">
      <nav
        ref={mobileMenuRef}
        className={`fixed right-0 top-0 z-[2] flex h-[calc(100%-55px)] flex-col items-center justify-between border-r-2 border-[#545c68] border-opacity-10 bg-amber-50 text-left ${
          isMobileMenuVisible ? "translate-x-0" : "translate-x-full"
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
          <div className="border-b border-dotted border-amber-950" />
        </div>
      </nav>
      <div
        className={`fixed z-10 w-full transition-transform duration-500 ease-in-out`}
      >
        <div
          className={`relative flex h-[80px] flex-wrap items-center justify-between bg-amber-950 transition-all duration-500 ${isOnTop ? "bg-opacity-0" : "bg-opacity-90"} px-4 py-1 lg:bg-opacity-0`}
        >
          <I18nToggle locale={locale} path={path} />
          <div ref={mobileMenuHandlerRef}>
            <button
              className="z-10 mr-auto flex h-10 w-10 scale-75 cursor-pointer flex-col justify-around border-none p-0"
              onClick={() => {
                setMobileMenuVisible(!isMobileMenuVisible);
              }}
              tabIndex={1}
            >
              <BurgerMenuIcon
                className={`${isMobileMenuVisible ? "stroke-black" : "stroke-white"}`}
                height={45}
                width={45}
              />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavComponents;
