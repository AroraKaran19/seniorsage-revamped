"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface NavLinksProps {
  index: number;
  name: string;
  url: string;
  classValue?: string;
  subMenu?: SubMenuValue[];
  mobileWrapper?: (value: boolean) => void;
  bgImage?: string;
  bgBlur?: boolean;
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
}: NavLinksProps) => {
  const currentPath = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(true);
  const router = useRouter();

  const handleNavClick = () => {
    if (url === currentPath) return;
    if (subMenu) {
      setSubMenuOpen(!subMenuOpen);
    } else {
      if (mobileWrapper) {
        mobileWrapper(false); // Closes the mobile menu
      }
      router.push(url);
    }
  };

  return (
    <div
      tabIndex={index}
      onClick={() => handleNavClick()}
      onMouseEnter={() => setSubMenuOpen(true)}
      onMouseLeave={() => setSubMenuOpen(false)}
      className={`navigation-link relative select-none ${
        currentPath === url || "/" + currentPath.split("/")[1] === url
          ? "text-black"
          : "text-black/30"
      } ${classValue}`}
      draggable={false}
      style={bgImage ? { backgroundImage: `url(${bgImage})` , backgroundSize: "cover", backgroundPosition: "center" } : {}}
    >
      <Link href={""} draggable={false} className={`${bgImage ? (bgBlur ? "bg-white/30 sm:bg-white/10 backdrop-blur-sm h-full w-full flex justify-center items-center rounded-lg sm:rounded-2xl" : "") : ""}`}>
        <div className="nav-link-name text-center w-full flex justify-center sm:justify-start items-center gap-0.5 z-[1003]">
          <span className={`flex flex-wrap ${bgImage ? "sm:p-2" : ""}`}>{name}</span>
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
          className={`sub-menu absolute sm:relative sm:left-0 top-full w-max bg-white cursor-default text-black justify-center items-center left-1/2 z-[1004] ${
            subMenuOpen ? "flex flex-wrap" : "hidden"
          }`}
        >
          {subMenu.map((submenuItem, subIndex) => (
            <div
              key={subIndex}
              className="sub-menu-links flex gap-1 h-full w-full sm:flex-col"
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
                  classValue={`sub-menu-item flex justify-center items-center pb-0 ${item.bgImage ? "text-white hover:text-white/90 sm:rounded-lg" : "text-black/30 hover:text-black"}`}
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
