/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import useScrollPosition from "~/hooks/use-scroll-position";
import { NavLink } from "./nav-link";
import { useNavContext } from "~/context/nav-context";
import { usePathname } from "next/navigation";
import BurgerMenuIcon from "../icons/burgermenu-icon";

const routes = {
  welkom: "/",
  over: "/over",
};

const NavComponents = () => {
  const {
    mobileMenuRef,
    mobileMenuHandlerRef,
    isMobileMenuVisible,
    setMobileMenuVisible,
  } = useNavContext();

  const path = usePathname();

  useEffect(() => {
    setMobileMenuVisible(false);
  }, [setMobileMenuVisible, path]);

  const { isOnTop } = useScrollPosition();
  const hideTopMenu = path === "/";

  return (
    <div>
      <nav
        ref={mobileMenuRef}
        className={`fixed right-0 top-0 z-[2] flex h-[calc(100%-55px)] flex-col items-center justify-between border-r-2 border-[#545c68] border-opacity-10 bg-amber-50 text-left ${
          isMobileMenuVisible ? "translate-x-0" : "translate-x-full"
        } min-h-full w-full pt-[55px] transition-transform duration-500 ease-in-out lg:w-80`}
      >
        <div className="flex h-full w-full flex-col justify-center">
          <NavLink
            href={routes.welkom}
            title={"Welkom"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.over}
            title={"Over ons"}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <div className="border-b border-dotted border-amber-950" />
        </div>
      </nav>
      <div
        className={`fixed z-[2] w-full transition-transform duration-500 ease-in-out`}
      >
        <div
          className={`relative flex h-[80px] flex-wrap items-center justify-center ${isOnTop ? "bg-transparent" : "bg-backgroundStart"} px-4 py-1`}
        >
          <div
            className={`${hideTopMenu ? "-translate-y-20" : "translate-y-0"} absolute flex flex-wrap items-center justify-center transition-transform duration-1000 ease-in-out`}
          >
            <h2 className="flex flex-row gap-6 font-sans text-base text-black text-opacity-80"></h2>
          </div>

          <div className="mr-auto flex flex-row items-center"></div>
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
