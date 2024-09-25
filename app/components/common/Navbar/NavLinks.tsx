"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export interface NavLinksProps {
  index: number;
  name: string;
  url: string;
  classValue?: string;
  subMenu?: SubMenuValue[];
  mobileWrapper?: (value: boolean) => void;
  bgImage?: string;
  bgBlur?: boolean;
  onClick?: () => void; // For mobile menu
  textShadow?: boolean;
}

interface SubMenuValue {
  title?: string;
  items: SubMenuProps[];
}

interface SubMenuProps {
  index: number;
  name: string;
  url: string;
  classValue?: string;
  subMenu?: SubMenuValue[];
  bgImage?: string;
  bgBlur?: boolean;
}

const NavLinks = ({
  index,
  name,
  url,
  classValue,
  subMenu,
  mobileWrapper,
  bgImage,
  bgBlur,
  onClick,
  textShadow,
}: NavLinksProps) => {
  const currentPath = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = (mobile?: boolean, href?: string) => {
    if (url === currentPath) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    };
    if (subMenu && !mobile) {
      setSubMenuOpen(!subMenuOpen);
    } else {
      if (mobileWrapper) {
        mobileWrapper(false); // Closes the mobile menu
        document.body.style.overflow = "auto";
      }
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 150);
      router.push(href || url);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      tabIndex={index}
      onClick={onClick || (() => handleNavClick(false, url))} // modified for mobile menu
      onMouseEnter={() => setSubMenuOpen(true)}
      onMouseLeave={() => setSubMenuOpen(false)}
      className={`navigation-link relative select-none ${
        currentPath === url || "/" + currentPath.split("/")[1] === url
          ? "text-black"
          : "text-black/30"
      } ${bgImage ? "rounded-2xl" : ""} ${classValue}`}
      draggable={false}
      style={{
        ...(bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderBottom: "0px",
            }
          : {}),
        ...(textShadow && windowWidth < 768
          ? { textShadow: "0.5px 0.25px black" }
          : {}),
      }}
    >
      <Link
        href={""}
        draggable={false}
        className={`${
          bgImage
            ? bgBlur
              ? "bg-white/30 sm:bg-white/10 backdrop-blur-sm h-full w-full flex justify-center items-center rounded-lg sm:rounded-2xl hover:bg-black/20"
              : ""
            : ""
        }`}
      >
        <div className="nav-link-name text-center w-full flex justify-center sm:justify-start items-center gap-0.5 z-[1003]">
          <span className={`flex flex-wrap ${bgImage ? "sm:p-2 sm:w-full flex justify-center items-center" : ""}`}>
            {name}
          </span>
          {subMenu && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`h-6 flex items-center transition-all duration-300 ease-in-out ${
                subMenuOpen && "-rotate-[180deg]"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>
      </Link>
      {subMenu && (
        <div
          className={`sub-menu absolute sm:relative sm:left-0 top-full sm:top-0 w-max bg-white cursor-default text-black justify-center items-center left-1/2 z-[1004] ${
            subMenuOpen ? "flex flex-wrap" : "hidden"
          }`}
        >
          {subMenu.map((submenuItem, subIndex) => (
            <div
              key={subIndex}
              className="sub-menu-links flex gap-2 h-full w-full sm:flex-col"
            >
              {/* {submenuItem.title && (
                <div className="sub-menu-title mb-2 underline flex flex-wrap text-center sm:hidden">
                  {submenuItem.title}
                </div>
              )} */}
              {submenuItem.items.map((item, itemIndex) => (
                <NavLinks
                  key={itemIndex}
                  {...item}
                  url={item.url}
                  onClick={() => handleNavClick(true, item.url)}
                  classValue={`sub-menu-item flex justify-center items-center pb-0 ${
                    item.bgImage
                      ? "text-white hover:text-white/95 sm:rounded-lg"
                      : "text-black/30 hover:text-black"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLinks;
