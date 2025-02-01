"use client";
import React, { useContext } from "react";
import { anonymousAnalyse } from "../AnonymousWrapper";

const AnalyseElseBtn = ({ status }: { status: boolean | undefined }) => {
  const { setSomeoneElse } = useContext(anonymousAnalyse);

  const handleClick = () => {
    scrollTo({ top: 0, behavior: "smooth" });
    setSomeoneElse({ value: false });
  };

  return (
    <button
      className="analyse-btn w-max flex items-center cursor-pointer mt-2"
      onClick={handleClick}
    >
      <span className="flex-shrink-0">
        {status ? "Analyse someone else ->" : "Try again ->"}
      </span>
    </button>
  );
};

export default AnalyseElseBtn;
