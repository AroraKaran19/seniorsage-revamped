"use client";
import React, { useContext, useEffect, useState } from "react";
import PageHeading from "@/app/(pages)/PageHeading";
import PlusIcon from "@/app/components/common/Svgs/PlusIcon";
import { FileWrapper } from "../Wrappers/UserFileWrapper";

const UploadResume = () => {
  const [draggingFile, setDraggingFile] = useState<boolean>(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const { setIsUploading, setFile } = useContext(FileWrapper);

  useEffect(() => {
    if (uploadFile) {
      setIsUploading(true);
      setTimeout(() => {
        setFile(uploadFile);
        setIsUploading(false);
      }, 2000);
    }
  }, [uploadFile]);

  const handleButtonUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.isTrusted) {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        if (file.type === "application/pdf") {
          setUploadFile(file);
        } else {
          console.error("Invalid file type - Please upload a PDF file");
          alert("Invalid file type - Please upload a PDF file");
        }
      }
    }
  };

  const handleDragDropUpload = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.isTrusted) {
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        if (file.type === "application/pdf") {
          setUploadFile(file);
        } else {
          console.error("Invalid file type - Please upload a PDF file");
          alert("Invalid file type - Please upload a PDF file");
        }
      }
      setDraggingFile(false);
    }
  };

  return (
    <div className="upload-resume-page w-full flex flex-col">
      <div className="page-header-content mx-auto text-center">
        <PageHeading heading="RESUME ANALYSIS" />
        <h3>Upload your resume for analysis</h3>
      </div>
      <div className="upload-resume-container border-[5px] border-dashed border-black rounded-3xl p-4 bg-black/5">
        <div
          className="upload-resume-inner-container h-full flex flex-col items-center justify-center gap-2"
          onDrop={(e) => {
            handleDragDropUpload(e);
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setDraggingFile(true);
          }}
          onDragLeave={() => {
            setDraggingFile(false);
          }}
        >
          <form>
            <input
              type="file"
              id="file"
              accept=".pdf"
              onChange={handleButtonUpload}
              className="hidden"
            />
            <label htmlFor="file">
              <div className="upload-resume-icon cursor-pointer p-10 rounded-full bg-black/10 max-w-fit max-h-fit sm:p-5">
                <PlusIcon className="stroke-[3]" />
              </div>
            </label>
          </form>
          <div className="upload-resume-text w-max flex flex-col justify-center items-center gap-2">
            <p>{!draggingFile ? "Drag and drop " : "Drop "} your resume here</p>
            <p>
              {"("} PDF Only {")"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;
