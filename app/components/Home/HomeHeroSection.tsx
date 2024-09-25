import React from "react";
import HomeHeroSectionHeader from "./components/HomeHeroSectionHeader";
import HomeHeroSectionServiceCards from "./components/HomeHeroSectionServiceCards";

const HomeHeroSection = () => {
  return (
    <>
      <div className="hero-section w-full flex flex-col pt-28 gap-[6.313rem] sm:gap-10 sm:pt-10 sm:px-10 md:px-[6.5rem]">
        <div className="hero-section-header w-full flex gap-6 sm:flex-col sm:gap-8">
          <HomeHeroSectionHeader />
        </div>
        <div className="hero-section-service-cards w-full flex items-stretch gap-[3.2rem] pb-24 select-none sm:flex-col sm:items-start" draggable={false}>
          <HomeHeroSectionServiceCards />
        </div>
      </div>
    </>
  );
};

export default HomeHeroSection;
