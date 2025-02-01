"use client";
import React, { useEffect, useState } from "react";
import "./resume-analysis.css";
import UploadResume from "./pages/UploadResume";
import UploadingPage from "./components/UploadingPage";
import ResumeAnalysisPage from "./pages/ResumeAnalysisPage";
import UserFileWrapper from "./Wrappers/UserFileWrapper";

const Page = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <UserFileWrapper
      isUploading={isUploading}
      setIsUploading={setIsUploading}
      file={file}
      setFile={setFile}
    >
      {isUploading ? (
        <UploadingPage />
      ) : file ? (
        <ResumeAnalysisPage />
      ) : (
        <UploadResume />
      )}
    </UserFileWrapper>
  );
};

export default Page;
