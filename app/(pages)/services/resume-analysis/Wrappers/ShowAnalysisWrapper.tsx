"use client";
import DownArrow from "@/app/components/common/Svgs/DownArrow";
import TickIcon from "@/app/components/common/Svgs/TickIcon";
import XMarkIcon from "@/app/components/common/Svgs/XMarkIcon";
import React, { useEffect, useState } from "react";

const ShowAnalysisWrapper = ({ data }: { data: object }) => {
  const [showFailed, setShowFailed] = useState<boolean>(false);

  useEffect(() => {
    setShowFailed(false);
  }, [data]);

  return (
    <div className="show-analysis-wrapper w-full flex flex-col border-[1px] border-black/30 rounded-3xl">
      <div className="resume-passed-para-container w-full bg-[#4c9fff] rounded-t-3xl flex flex-col gap-8 sm:gap-6">
        <div className="resume-analysis-section-heading mb-2 sm:text-center">
          We looked through your resume, And here&apos;s what we found
        </div>
        {data &&
          Object.entries(data).map(([key, value], index) => {
            if (value.isGood) {
              return (
                <div
                  key={index}
                  className={`${key} analysis-para rounded-lg w-full bg-white/20 flex flex-col justify-center sm:items-center`}
                  style={{
                    animation: `fadeInFromTop 1s ease-in-out forwards ${
                      0.2 * index
                    }s`,
                  }}
                >
                  <div className="analysis-element-heading bg-white max-w-max text-[#4c9fff] flex flex-wrap gap-2 items-center rounded-lg sm:gap-1 sm:max-w-full sm:w-full sm:justify-center">
                    <span>{key.replace("_", " ")}</span>
                    <TickIcon className="size-6" />
                  </div>
                  <p className="para-text text-white sm:text-center">
                    {value.text}
                  </p>
                </div>
              );
            }
          })}
      </div>
      <div className="resume-failed-para-container w-full bg-white rounded-b-3xl relative flex flex-col">
        <div
          className="resume-analysis-section-heading absolute -top-11 select-none cursor-pointer bg-[#FFDDDD] text-red-500 rounded-3xl w-max sm:left-1/2 sm:-top-8 sm:-translate-x-1/2"
          onClick={() => setShowFailed(!showFailed)}
        >
          <h2 className="text-center flex flex-wrap gap-8 items-center justify-center sm:gap-6">
            <span>
              {Object.keys(data).length > 0
                ? Object.entries(data).filter(([, value]) => !value.isGood)
                    .length - 1
                : 0}{" "}
              Problems
            </span>
            <DownArrow
              className={`size-6 transition-all duration-500 ease-in-out ${
                !showFailed ? "rotate-0" : "-rotate-180"
              }`}
            />
          </h2>
        </div>

        {showFailed && data && (
          <div
            className={`resume-failed-content w-full flex flex-col transition-all duration-500 ease-in-out gap-8 sm:gap-6 ${
              showFailed ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            {Object.entries(data).map(([key, value], index) => {
              if (!value.isGood && key != "Resume_Score") {
                return (
                  <div
                    key={index}
                    className={`${key} analysis-para rounded-lg w-full bg-transparent flex flex-col justify-center gap-3 sm:items-center`}
                    style={{
                      animation: `fadeInFromTop 1s ease-in-out forwards ${
                        0.2 * index
                      }s`,
                    }}
                  >
                    <div className="analysis-element-heading bg-[#FFDDDD] max-w-max text-red-500 flex flex-wrap gap-2 items-center rounded-lg sm:gap-1 sm:max-w-full sm:w-full sm:justify-center">
                      <span>{key.replace("_", " ")}</span>
                      <XMarkIcon className="size-6" />
                    </div>
                    <p className="para-text bg-black/5 text-black rounded-lg sm:text-center">
                      {value.text}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowAnalysisWrapper;
