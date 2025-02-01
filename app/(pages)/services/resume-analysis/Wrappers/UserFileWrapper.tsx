"use client";
import React, { createContext, Dispatch, useEffect, useState } from "react";

export const FileWrapper = createContext<{
  resumeData: object | null;
  setResumeData: Dispatch<React.SetStateAction<object | null>>;
  isUploading: boolean;
  setIsUploading: Dispatch<React.SetStateAction<boolean>>;
  file: File | null;
  setFile: Dispatch<React.SetStateAction<File | null>>;
}>({
  resumeData: null,
  setResumeData: () => {},
  isUploading: false,
  setIsUploading: () => {},
  file: null,
  setFile: () => {},
});

const UserFileWrapper = ({
  children,
  isUploading,
  setIsUploading,
  file,
  setFile,
}: {
  children?: React.ReactNode;
  isUploading: boolean;
  setIsUploading: Dispatch<React.SetStateAction<boolean>>;
  file: File | null;
  setFile: Dispatch<React.SetStateAction<File | null>>;
}) => {
  const [resumeData, setResumeData] = useState<object | null>(null);

  useEffect(() => {
    if (resumeData) {
      scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [resumeData]);
  return (
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
      {children}
    </FileWrapper.Provider>
  );
};

export default UserFileWrapper;
