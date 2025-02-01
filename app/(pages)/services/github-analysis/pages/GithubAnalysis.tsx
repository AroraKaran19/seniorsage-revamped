import React, { useContext, useEffect, useState } from "react";
import Quote from "@/app/components/common/Svgs/Quote";
import AnalyzeBtn from "../../common-components/AnalyseBtn";
import AnalyseWrapper from "../components/AnalyseWrapper";
import LoadingDots from "@/app/components/common/LoadingDots";
import { userContext } from "../UserResponseWrapper";
import { fetchValue } from "../analysis";
import AnalyseElseBtn from "../components/AnalyseElseBtn";
import PageHeading from "@/app/(pages)/PageHeading";

export interface responseType {
  status: boolean;
  value?: {
    languageInfo: {
      CareerDomain: string;
      FocusedDomain: string;
      FocusedSubDomain: string;
      LanguageCount: number;
      Languages: [];
      RecommendedLanguages: [];
    };
    repoInfo: {
      repos: number;
      comment: string;
      background_color: string;
    };
  };
  message?: string;
  errorCode?: number;
}

const GithubAnalysis = ({ fetchInfo }: { fetchInfo: () => void }) => {
  const [analysisData, setAnalysisData] = useState<responseType | null>(null);
  const { user, setUser, response, status } = useContext(userContext);

  useEffect(() => {
    if (user && response && setUser) {
      fetchValue(status, response, setAnalysisData, setUser);
    }
  }, [response]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [analysisData]);

  return (
    <>
      <div className="github-analysis-page w-full flex flex-col">
        <div className="heading-content flex justify-center w-full sm:flex-col">
          <div className="heading-content-left w-2/3 sm:w-full">
            <PageHeading heading="GITHUB ANALYSIS" />
            <Quote />
            <h2 className="head-message transition-all ease-in-out duration-300 w-[60%] sm:w-full">
              {analysisData != null ? (
                analysisData.status === true ? (
                  <p className="text">
                    Based on your GitHub profile, we&apos;ve analysed these on your
                    personal public repos
                  </p>
                ) : (
                  analysisData.status === false && (
                    <span>Error: {analysisData?.message}</span>
                  )
                )
              ) : (
                <div className="flex flex-wrap gap-1">
                  <span>Analyzing {user?.username}&apos;s Repo</span>
                  <LoadingDots />
                </div>
              )}
            </h2>
            {analysisData && analysisData?.status != false && (
              <div className="analysis-para-wrapper flex gap-4 flex-wrap w-[50%] sm:w-full ">
                {[
                  "Public Repos",
                  "Programming skills",
                  "Career Potential",
                  "+ More",
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`analysis-para px-4 py-2 rounded-xl w-max ${
                      index != 3
                        ? "bg-[#ededed] text-black"
                        : "bg-black text-white"
                    }`}
                  >
                    <p className="para-text select-none">{item}</p>
                  </div>
                ))}
              </div>
            )}
            {analysisData && analysisData?.status != false && (
                <AnalyzeBtn clickEvent={fetchInfo} />
            )}
            {analysisData && (
              <AnalyseElseBtn status={analysisData?.status} />
            )}
          </div>
          <div className="heading-content-right w-1/3 flex justify-center items-center sm:w-full">
            {analysisData &&
            (analysisData?.status || analysisData?.errorCode != 404) ? (
              <div className="user-github-profile-photo flex flex-col justify-center items-center sm:mt-10">
                <img
                  src={user?.profilePhotoUrl ?? "/defaultUser.png"}
                  alt="Github User Profile Photo"
                  className="rounded-full aspect-square select-none flex justify-center items-center border-[2px] border-black"
                  draggable={false}
                  loading="lazy"
                />
                <div className="user-username text-center mt-2 max-w-max">
                  {user ? (
                    <a
                      href={`https://github.com/${user?.username}`}
                      title="Visit Github Profile"
                    >
                      {user?.username ?? "Github User"}
                    </a>
                  ) : (
                    <LoadingDots />
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <AnalyseWrapper
          response={analysisData && analysisData}
          status={analysisData ? analysisData?.status.toString() : undefined}
        />
      </div>
    </>
  );
};

export default GithubAnalysis;
