import React from "react";

const UploadingPage = () => {
  return (
    <>
      <div className="loading-page min-h-screen w-full flex flex-col justify-center items-center gap-4">
        <div className="loading-page__loader rounded-full"></div>
        <div className="loading-page__text text-center flex">
          <span>Uploading</span>
          <div className="loading-page__text__dots flex">
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadingPage;
