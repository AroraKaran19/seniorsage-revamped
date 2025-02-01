"use client";
import InfoIcon from "@/app/components/common/Svgs/InfoIcon";
import React, { useEffect, useState } from "react";

const TimeTopInfo = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.isTrusted) {
      setShowInfo(!showInfo);
    }
  };

  useEffect(() => {
    const infoIconTop = document.querySelector(".info-icon-top");
    const handleClickOutside = (e: MouseEvent) => {
      if (infoIconTop && !infoIconTop.contains(e.target as Node)) {
        setShowInfo(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`info-icon-top absolute w-[250px] z-10 max-w-max flex items-center gap-0.5 text-sm transition-all ease-in-out duration-500 rounded-full animate-bounce -top-3 left-[90%] sm:text-[12px] sm:-left-4 sm:top-[25%] sm:-translate-y-[25%] ${
        showInfo ? "showInfo" : ""
      }`}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <InfoIcon className="size-5 sm:size-4" />
      {showInfo && <div className="info-text p-1 sm:p-0 rounded-full transition-all ease-in-out duration-500 max-w-max">
        it can also depend on the size of the resume
      </div>}
    </div>
  );
};

export default TimeTopInfo;
