"use client";
import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import SeniorSageLogo from "../SeniorSageLogo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    {
      index: 1,
      name: "Home",
      url: "/",
    },
    {
      index: 2,
      name: "Services",
      url: "/services",
      subMenu: [
        {
          items: [
            {
              index: 1,
              name: "Github Analysis",
              url: "/services/github-analysis",
              bgImage: "/github.webp",
              bgBlur: true,
              textShadow: true,
            },
            {
              index: 2,
              name: "Resume Analysis",
              url: "/services/resume-analysis",
              bgImage: "/resume.jpeg",
              bgBlur: true,
              textShadow: true,
            },
            {
              index: 3,
              name: "Course Recommendation",
              url: "/services/course-recommendation",
              bgImage: "/course.jpeg",
              bgBlur: true,
              textShadow: true,
            },
          ],
        },
      ],
    },
    {
      index: 3,
      name: "About",
      url: "/about",
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
      if (window.scrollY > 10) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
  // const lastScrollY = useRef<number>(0);

  // const handleScroll = () => {
  //   if (window.scrollY > 10 && window.scrollY < lastScrollY.current) {
  //     setIsSticky(true);
  //   } else {
  //     setIsSticky(false);
  //   }
  //   lastScrollY.current = window.scrollY;
  // };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`navbar z-[2000] bg-white w-full max-w-full ${shadow ? "box-shadow" : ""}`}
      >
        {/* Mobile Wrapper */}
        <div
          className={`nav-wrapper top-0 left-0 hidden sm:block absolute transition-all duration-500 ease-in-out ${
            menuOpen
              ? "w-full h-screen bg-black/10 backdrop-blur-lg z-[1001]"
              : ""
          }
          }`}
        >
          <div
            className={`menu-container bg-white w-[70vw] absolute top-0 h-screen z-[1002] ${
              menuOpen && "open"
            } flex flex-col gap-4 rounded-tr-2xl rounded-br-2xl`}
          >
            <div className="menu-header w-full h-16 flex justify-center items-center pl-14 pr-6 border-b-[1px]">
              <img src="/SeniorSage Logo.webp" alt="SeniorSage" />
            </div>
            <div className="menu-links w-full flex flex-col gap-4 items-start">
              {menu.map((item) => (
                <NavLinks
                  key={item.index}
                  {...item}
                  classValue="menu-link"
                  mobileWrapper={setMenuOpen}
                />
              ))}
            </div>
            <div className="menu-footer w-full flex justify-center items-center">
              <div className="authentication-wrapper h-full w-fit flex justify-center items-center rounded-full bg-black hover:bg-black/80 text-white cursor-pointer">
                <span>Register</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="main-nav w-full h-full flex max-w-full gap-6">
          <div
            className={`hamburger-menu hidden sm:flex sm:flex-1 justify-start items-center select-none ${menuOpen ? "md:mx-2 p-3" : "md:mx-8"}`}
            draggable={false}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox={`${!menuOpen ? "0 0 128 128" : "0 0 24 24"}`}
              strokeWidth={1}
              stroke="currentColor"
              className={`menu-btn size-8 hover:cursor-pointer text-black ${
                menuOpen ? "z-[1003]" : ""
              }`}
              onClick={() => toggleMenu()}
            >
              {!menuOpen ? (
                <>
                 <path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"/>
        <path fill="#444b54" d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"/>
        <path fill="#444b54" d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"/>
        <g>
            <path fill="#444b54" d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"/>
        </g>
                </>
              ) : (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6 M6 6l12 12"
                    className={`cross ${!menuOpen && "close"}`}
                  />
                </>
              )}
            </svg>
          </div>
          <div className="logo-box flex-1 flex justify-start items-center sm:flex-none flex-grow">
            <SeniorSageLogo className="cursor-pointer" onClick={() => window.location.replace("/")} />
          </div>
          <div className="nav-links flex-none sm:hidden flex justify-center items-center gap-16 flex-wrap flex-shrink-0">
            {menu.map((item) => (
              <NavLinks key={item.index} {...item} classValue="pb-2" />
            ))}
          </div>
          <div className="authentication-btn flex-1 flex justify-end items-center sm:px-2 flex-grow select-none">
            <div className="authentication-wrapper flex justify-center items-center rounded-full bg-black hover:bg-black/80 text-white cursor-pointer sm:bg-transparent sm:text-black sm:p-0">
              <span className="sm:hidden">Register</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 sm:flex hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
