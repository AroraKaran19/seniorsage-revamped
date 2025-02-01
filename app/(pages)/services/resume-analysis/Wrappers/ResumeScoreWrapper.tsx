import LoadingDots from "@/app/components/common/LoadingDots";
import Error from "@/app/components/common/Svgs/Error";
import Party from "@/app/components/common/Svgs/Party";
import React from "react";

const ResumeScoreWrapper = ({ data }: { data: string }) => {
  return (
    <div className="resume-score-wrapper w-full flex bg-[#EADEFE] justify-between items-stretch rounded-[4rem] sm:flex-col sm:bg-transparent sm:gap-5">
      <div className="resume-score-wrapper-left-side w-[35%] bg-[#8941ff] rounded-[3rem] sm:w-full">
        <p className="text-center">Your score is</p>

        <div className="resume-score-container w-full flex items-center justify-center mt-20 sm:mt-5">
          <div
            className="resume-show-outer-circle relative max-w-max aspect-square rounded-full p-4"
            style={
              {
                "--data-percentage": data ? 100 - Number(data) : 0,
              } as React.CSSProperties
            }
          >
            <div className="resume-show-inner-circle relative aspect-square rounded-full bg-[#8941ff] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 flex items-center justify-center p-4">
              <div className="score-show-circle bg-white text-[#8941ff] relative rounded-full w-full h-full aspect-square flex items-center justify-center">
                {data ? (
                  <span>{data + "%"}</span>
                ) : (
                  <div className="flex flex-wrap gap-1 text-[clamp(1.25rem,4vw,1.75rem)]">
                    <span className="text-center">Calculating</span>
                    <LoadingDots />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-score-wrapper-right-side w-[35%] flex gap-4 flex-col justify-between bg-[#8941ff] rounded-[3rem] sm:w-full">
        {data ? (
          <p className="sm:text-center">
            {Number(data) >= 50 ? "That's Impressive!" : "Needs Improvement"}
          </p>
        ) : (
          <LoadingDots />
        )}
        {data ? (
          <div className="view-icon">{Number(data) >= 50 ? <Party /> : <Error />}</div>
        ) : null}
      </div>
    </div>
  );
};

export default ResumeScoreWrapper;
