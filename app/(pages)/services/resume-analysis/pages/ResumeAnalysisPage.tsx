"use client";
import PageHeading from "@/app/(pages)/PageHeading";
import Quote from "@/app/components/common/Svgs/Quote";
import React, { useContext, useEffect, useState } from "react";
import { fetchResumeAnalysis } from "../analysis";
import { FileWrapper } from "../Wrappers/UserFileWrapper";
import LoadingDots from "@/app/components/common/LoadingDots";
import AnalyseBtn from "../../common-components/AnalyseBtn";
import UploadOtherBtn from "../components/UploadOtherBtn";
import TimeTopInfo from "../components/TimeTopInfo";
import ResumeAnalyserWrapper from "../components/ResumeAnalyserWrapper";

const ResumeAnalysisPage = () => {
  const { file, resumeData, setResumeData } = useContext(FileWrapper);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (file) {
      const timeTaken = fetchResumeAnalysis(file, setResumeData);
      timeTaken.then((time) => {
        if (typeof time === "number") {
          setTime(time);
        }
      });
    }
  }, [file]);

  return (
    <div className="resume-analysis-page w-full flex flex-col">
      <div className="heading-content w-full flex flex-col justify-center">
        <div className="heading-content-left w-2/3 sm:w-full">
          <PageHeading heading="RESUME ANALYSIS" />
          <Quote />
          <h2 className="head-message transition-all ease-in-out duration-300 w-[65%] sm:w-full">
            {resumeData ? (
              <span>
                Based on your upload, we&apos;ve analysed your resume and here
                are the results!
              </span>
            ) : (
              <div className="flex flex-wrap gap-1">
                <span>We are analysing your resume</span>
                <LoadingDots />
              </div>
            )}
          </h2>
          {resumeData && (
            <div className="analysis-para-wrapper flex gap-4 flex-wrap w-[53%] sm:w-full ">
              {["ATS Compliance", "Education", "Selection Score", "+ More"].map(
                (item, index) => (
                  <div
                    key={index}
                    className={`analysis-para px-4 py-2 rounded-xl w-max ${
                      index != 3
                        ? "bg-[#ededed] text-black"
                        : "bg-black text-white"
                    }`}
                  >
                    <p className="para-text select-none">{item}</p>
                  </div>
                )
              )}
            </div>
          )}
          {resumeData && time ? (
            <div className="time-text text-center max-w-max flex flex-wrap gap-[clamp(0.25rem,5vw,0.5rem)] items-center justify-center">
              <div className="relative">
                Time Taken to analyse:{" "}
                <TimeTopInfo />
              </div>
              <span className="time-taken">{time.toFixed(2)}s</span>
            </div>
          ) : null}
          {resumeData && file && (
            <AnalyseBtn
              clickEvent={() => {
                setResumeData(null);
                setTime(0);
                fetchResumeAnalysis(file, setResumeData).then((time) => {
                  if (typeof time === "number") {
                    setTime(time);
                  }
                });
              }}
            />
          )}
          {resumeData && file && <UploadOtherBtn />}
        </div>
      </div>
			<ResumeAnalyserWrapper />
    </div>
  );
};

export default ResumeAnalysisPage;
