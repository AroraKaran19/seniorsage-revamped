"use client";
import React, { MouseEvent } from "react";

const SearchBtn = ({
  search,
  clickFn,
}: {
  search: string;
  clickFn: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
}) => {
  return (
    <div
      className={`search-btn ${
        search.length > 0
          ? "opacity-100 bg-green-300 cursor-pointer translate-x-full"
          : "opacity-0 -translate-x-0" 
      } absolute p-2 rounded-lg -right-5 sm:static sm:right-0`}
      onClick={(e) => clickFn(e)}
    >
      {search.length > 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      )}
    </div>
  );
};

export default SearchBtn;
