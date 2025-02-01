import React from "react";
import HomeWhatWeDoHeader from "./HomeSection2/HomeWhatWeDoHeader";
import HomeWhatWeDoFeatureCards from "./HomeSection2/HomeWhatWeDoFeatureCards";

const WhatWeDoSection = () => {
  return (
    <div className="what-we-do w-full flex flex-col">
      <div className="text-header what-we-do-header w-full flex pb-[9.5rem] gap-6 sm:gap-8 sm:flex-col sm:pb-10">
        <HomeWhatWeDoHeader />
      </div>
      <div
        className="features-card-container w-full flex pb-24 sm:pb-10 rounded-[3rem]"
        style={{ overflowX: "hidden" }}
      >
        <HomeWhatWeDoFeatureCards />
      </div>
    </div>
  );
};

export default WhatWeDoSection;
