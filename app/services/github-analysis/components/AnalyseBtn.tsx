"use client";
import React from "react";

const AnalyseBtn = ({ clickEvent } : { clickEvent: () => void }) => {
  
  return (
    <button className="analyse-btn w-max mt-10 flex items-center cursor-pointer" onClick={clickEvent}>
      <span className="flex-shrink-0">Analyse again {"->"}</span>
    </button>
  );
};

export default AnalyseBtn;
