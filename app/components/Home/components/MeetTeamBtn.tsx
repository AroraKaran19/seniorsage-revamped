"use client";
import { useRouter } from "next/navigation";
import React from "react";

const MeetTeamBtn = () => {
  const router = useRouter();

  const navigate = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 150);
    router.push("/about");
  };

  return (
    <>
      <div
        className="service-card-header h-full cursor-pointer flex flex-wrap"
        onClick={() => navigate()}
      >
        <div className="service-card-container flex gap-2 h-full items-end">
          <p className="text-white leading-none flex flex-wrap">
            Meet our team
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 80 24"
            stroke="white"
            className="max-h-full min-h-[1.125rem] min-w-20 flex w-fit"
          >
            <path
              className="flex place-self-start transition-all duration-700 ease-in-out"
              d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
              fill="#fff"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default MeetTeamBtn;
