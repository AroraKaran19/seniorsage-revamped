import React from "react";
import Lock from "./Svgs/Lock";

const TestModeWrapper = () => {
  return (
    <div className="blur-wrapper bg-white/40 backdrop-blur-sm rounded-[2rem] absolute left-0 h-full w-full pointer-events-auto z-10 flex flex-col justify-center items-center">
      <Lock />
      <div className="content w-full flex justify-center flex-col items-center gap-2">
        <p className="text-xl sm:text-2xl">Sign In to view</p>
        <button className="bg-black text-white rounded-full font-[14px] px-4 py-2">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default TestModeWrapper;
