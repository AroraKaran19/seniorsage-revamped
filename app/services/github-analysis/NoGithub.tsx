"use client";
import GithubIcon from "@/app/components/common/Svgs/GithubIcon";
import StarIcon from "@/app/components/common/Svgs/StarIcon";
import React, { KeyboardEvent, MouseEvent, useContext, useState } from "react";
import SearchBtn from "./components/SearchBtn";
import { anonymousAnalyse } from "./AnonymousWrapper";

const NoGithub = () => {
	const { setSomeoneElse } = useContext(anonymousAnalyse);
  const [search, setSearch] = useState<string>("");

	const handleSubmit = (e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>) => {
		if (search.length > 0 && e.isTrusted) {
			setSomeoneElse({ username: search, value: true });
		}
	};

  return (
    <div className="github-find-user-page w-full flex flex-col">
      <div className="heading-content flex justify-center w-full">
        <h1 className="page-heading">GITHUB ANALYSIS</h1>
      </div>

      <div className="github-find-user-content w-full flex flex-col items-center mt-[clamp(2rem,5vw,4rem)]">
        <div className="content-container flex flex-col gap-6 items-center min-w-[70%] rounded-3xl bg-black/10 border-black border-[4px] border-dashed min-h-24 p-6 sm:w-full">
          <div className="connect-github-container flex flex-col items-center text-[1.25rem] gap-4">
            <p className="text-center">
              Sign in with Github to get your Github Analysis
            </p>
            <div className="connect-github-btn flex items-stretch relative">
              <span className="px-2 py-1">Connect</span>
              <div className="connect-github flex items-center gap-2 bg-[#8941FF] text-white px-2 py-0.5 rounded-lg cursor-pointer">
                <GithubIcon className="size-[1.5rem] aspect-square" />
                <div className="text-center">Github</div>
                <div className="element-above-tag absolute flex items-center gap-0.5 bg-black text-white text-sm transition-all ease-in-out duration-500 rounded-full -top-2.5 left-[95%] sm:text-[12px] sm:left-[89%]">
                  <StarIcon className="size-5 fill-[#FFD700] sm:size-4" />
                  <div className="p-0.5 hidden suggested-text sm:p-0">Suggested!</div>
                </div>
              </div>
            </div>
          </div>
          <div className="breaker">OR</div>
          <div className="github-user-search flex items-center relative sm:flex-col sm:gap-4">
            <input
              type="text"
              placeholder="Enter Github Username"
              className="w-full p-2 border-[1px] text-center border-black rounded-lg outline-none placeholder:text-center"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            />
            <SearchBtn search={search} clickFn={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoGithub;
