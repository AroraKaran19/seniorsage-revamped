"use client";
import { useRouter } from "next/navigation";
import React from "react";

const UploadResumeBtn = () => {

	const router = useRouter();

	const handleClick = () => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}, 150);
		router.push("/services/resume-analysis");
	};

  return (
    <>
      <div onClick={() => handleClick()} className="upload-resume-wrapper flex gap-6 justify-center w-full h-full bg-service-card-2-bg bg-right bg-200-percent hover:bg-left text-[#4C9FFF] hover:text-white transition-all duration-700 ease-in-out rounded-[2.8rem] cursor-pointer sm:rounded-xl sm:mt-0 sm:absolute sm:right-5 sm:w-fit sm:h-fit sm:bottom-5">
            <div className="upload-resume-text flex-1 flex flex-col justify-center flex-wrap sm:hidden">
              <p>Upload your</p>
              <p>resume here</p>
            </div>
            <div className="upload-resume-icon flex-none flex justify-end items-center">
              <svg
                viewBox="0 0 79 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0935 53.625V60.9375C10.0935 62.8769 10.8639 64.7369 12.2353 66.1082C13.6066 67.4796 15.4666 68.25 17.406 68.25H61.281C63.2204 68.25 65.0804 67.4796 66.4517 66.1082C67.8231 64.7369 68.5935 62.8769 68.5935 60.9375V53.625M24.7185 24.375L39.3435 9.75M39.3435 9.75L53.9685 24.375M39.3435 9.75V53.625"
                  stroke="#4C9FFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
    </>
  );
};

export default UploadResumeBtn;
