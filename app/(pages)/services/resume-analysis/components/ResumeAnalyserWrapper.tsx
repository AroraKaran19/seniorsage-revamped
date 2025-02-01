"use client";
import React, { useContext } from "react";
import { FileWrapper } from "../Wrappers/UserFileWrapper";
import ResumeScoreWrapper from "../Wrappers/ResumeScoreWrapper";
import ShowAnalysisWrapper from "../Wrappers/ShowAnalysisWrapper";

const ResumeAnalyserWrapper = () => {
  const { resumeData } = useContext(FileWrapper);

  return (
    <div className="resume-analyser-wrapper w-full flex flex-col gap-10">
      <ResumeScoreWrapper
        data={
          JSON.parse(JSON.stringify(resumeData))
            ? JSON.parse(JSON.stringify(resumeData)).Resume_Score.value
            : ""
        }
      />
      <ShowAnalysisWrapper data={resumeData ? resumeData : {}} />
    </div>
  );
};

export default ResumeAnalyserWrapper;
