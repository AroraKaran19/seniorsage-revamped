"use client";
import React, { useEffect } from "react";

const GetStartedBtn = () => {

	const navigate = () => {
    const navbar = document.querySelector(".navbar")?.clientHeight || 0;
    const section = document.querySelector(".service-card-1")?.clientHeight || 0;
    window.scrollTo({
      top: section - (navbar + 20),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      className="get-started-btn w-fit flex gap-3 items-stretch cursor-pointer"
      onClick={() => navigate()}
    >
      <span className="leading-none select-none shrink-0 flex items-center">
        Get Started
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 80 24"
        stroke="currentColor"
        className="min-w-20 flex justify-start items-start w-max"
      >
        <path
          className="flex place-self-start transition-all duration-300 ease-in-out"
          d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
          fill="#000"
        ></path>
      </svg>
    </div>
  );
};

export default GetStartedBtn;
