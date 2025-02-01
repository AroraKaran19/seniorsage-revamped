"use client";
import React, { createContext, useEffect, useState } from "react";
import "./resume-analysis.css";
import UploadResume from "./pages/UploadResume";
import UploadingPage from "./components/UploadingPage";
import ResumeAnalysisPage from "./pages/ResumeAnalysisPage";

export const FileWrapper = createContext({
  resumeData: null as Object | null,
  setResumeData: (data: Object | null) => {},
  isUploading: false,
  setIsUploading: (value: boolean) => {},
  file: null as File | null,
  setFile: (file: File | null) => {},
});

const page = () => {
  const [resumeData, setResumeData] = useState<Object | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (resumeData) {
      scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [resumeData]);

  return (
    <>
      <FileWrapper.Provider
        value={{
          resumeData,
          setResumeData,
          isUploading,
          setIsUploading,
          file,
          setFile,
        }}
      >
        {isUploading ? (
          <UploadingPage />
        ) : file ? (
          <ResumeAnalysisPage />
        ) : (
          <UploadResume />
        )}
      </FileWrapper.Provider>
    </>
  );
};

export default page;
