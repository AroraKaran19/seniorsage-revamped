import React from "react";
import HomeHeroSectionHeader from "./components/HomeHeroSectionHeader";
import HomeHeroSectionServiceCards from "./components/HomeHeroSectionServiceCards";

const HomeHeroSection = () => {
  return (
    <>
      <div className="hero-section w-full flex flex-col pt-28 px-[8.125rem] gap-[6.313rem] sm:gap-16 sm:pt-10 sm:px-6">
        <div className="hero-section-header w-full flex gap-3 sm:flex-col sm:gap-8">
          <HomeHeroSectionHeader />
        </div>
        <div className="hero-section-service-cards w-full flex items-stretch gap-[3.2rem] pb-24 select-none sm:flex-col" draggable={false}>
          <HomeHeroSectionServiceCards />
        </div>
      </div>
    </>
  );
};

export default HomeHeroSection;
