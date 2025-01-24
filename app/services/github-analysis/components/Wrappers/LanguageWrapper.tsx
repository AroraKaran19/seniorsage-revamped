"use client";
import LoadingDots from "@/app/components/common/LoadingDots";
import React from "react";

const LanguageWrapper = ({
  knownLanguages,
  recommendedLanguages,
  status,
}: {
  knownLanguages: object | null;
  recommendedLanguages: string[] | null;
  status?: string | null;
}) => {
  const loadMoreLanguages = () => {
    const language_wrapper = document.querySelector(".known");
    if (language_wrapper && knownLanguages) {
      const language_button = language_wrapper.querySelector(
        ".language-container:last-child"
      );
      if (language_button) {
        language_button.remove();
      }
      Object.values(knownLanguages).map((value, index) => {
        if (index > 4) {
          const language_container = document.createElement("div");
          language_container.classList.add(
            "language-container",
            "px-4",
            "py-2",
            "rounded-xl",
            "w-max",
            "bg-[#ededed]",
            "text-[#4c9fff]"
          );
          language_container.innerHTML = `<p class="language select-none">${value?.name}</p>`;
          language_wrapper.appendChild(language_container);
        }
      });
    }
  };

  const LoadMoreRecommendedLanguages = () => {
    const language_wrapper = document.querySelector(".recommended");
    if (language_wrapper && recommendedLanguages) {
      const language_button = language_wrapper.querySelector(
        ".language-container:last-child"
      );
      if (language_button) {
        language_button.remove();
      }
      recommendedLanguages.map((value, index) => {
        if (index > 4) {
          const language_container = document.createElement("div");
          language_container.classList.add(
            "language-container",
            "px-4",
            "py-2",
            "rounded-xl",
            "w-max",
            "bg-[#ededed]",
            "text-[#4c9fff]"
          );
          language_container.innerHTML = `<p class="language select-none">${value}</p>`;
          language_wrapper.appendChild(language_container);
        }
      });
    }
  };

  return (
    <div className="language-wrapper w-full flex bg-[#E2F0FF] justify-between items-stretch rounded-[4rem] relative sm:flex-col sm:bg-transparent sm:gap-5 overflow-clip">
      <div className="language-wrapper-left-side w-3/5 bg-[#4c9fff] rounded-[3rem] flex flex-col gap-20 sm:gap-8 sm:w-full">
        <div className="known-languages flex flex-col">
          <div className="heading sm:text-center">
            {status != "false" ? (
              <div className="flex flex-wrap sm:justify-center">
                You know{" "}
                {knownLanguages ? (
                  <span className="underline mx-2">
                    {Object.keys(knownLanguages).length}
                  </span>
                ) : (
                  <div className="mx-2">
                    <LoadingDots />
                  </div>
                )}{" "}
                programming languages
              </div>
            ) : (
              <span className="sm:text-center">Error</span>
            )}
          </div>
          <div className="languages known flex flex-wrap gap-2 sm:justify-center">
            {status != "false" ? (
              knownLanguages ? (
                Object.entries(knownLanguages).map(([, value], index) => {
                  if (index < 5) {
                    return (
                      <div
                        key={index}
                        className="language-container px-4 py-2 rounded-xl w-max bg-[#ededed] text-[#4c9fff]"
                      >
                        <p className="language select-none">{value?.name}</p>
                      </div>
                    );
                  }
                })
              ) : (
                <LoadingDots />
              )
            ) : (
              "!!!"
            )}
            {knownLanguages && Object.keys(knownLanguages).length > 5 && (
              <button
                className="language-container px-4 py-2 rounded-xl w-max bg-[#ededed] text-[#4c9fff]"
                onClick={() => loadMoreLanguages()}
              >
                <p className="language select-none">
                  + {Object.keys(knownLanguages).length - 5}
                </p>
              </button>
            )}
          </div>
        </div>

        <div className="recommended-languages flex flex-col">
          <div className="heading sm:text-center">
            {status != "false" ? (
              <span className="flex flex-wrap gap-2 sm:justify-center">
                We recommend{" "}
                {recommendedLanguages &&
                  recommendedLanguages.length >= 1 &&
                  recommendedLanguages[0] !=
                    "You should focus on studying more about the languages you already know" &&
                  "you to learn"}
              </span>
            ) : (
              <span className="">Error</span>
            )}
          </div>
          <div className="languages recommended flex flex-wrap gap-2 sm:justify-center">
            {status != "false" ? (
              recommendedLanguages ? (
                recommendedLanguages.map((value, index) => {
                  if (index < 5) {
                    return (
                      <div
                        key={index}
                        className="language-container px-4 py-2 rounded-xl w-max bg-[#ededed] text-[#4c9fff]"
                      >
                        <p className="language select-none sm:text-center">
                          {value}
                        </p>
                      </div>
                    );
                  }
                })
              ) : (
                <LoadingDots />
              )
            ) : (
              "!!!"
            )}
            {recommendedLanguages && recommendedLanguages.length > 5 && (
              <button
                className="language-container px-4 py-2 rounded-xl w-max bg-[#ededed] text-[#4c9fff]"
                onClick={() => LoadMoreRecommendedLanguages()}
              >
                <p className="language select-none">
                  + {recommendedLanguages.length - 5}
                </p>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="language-wrapper-right-side w-1/5 bg-[#4c9fff] rounded-[3rem] sm:hidden"></div>
    </div>
  );
};

export default LanguageWrapper;
