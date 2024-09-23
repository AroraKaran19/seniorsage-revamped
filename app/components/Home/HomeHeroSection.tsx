import React from "react";
import HomeHeroSectionHeader from "./components/HomeHeroSectionHeader";
import HomeHeroSectionServiceCards from "./components/HomeHeroSectionServiceCards";

const HomeHeroSection = () => {
  return (
    <>
      <div className="hero-section w-full flex flex-col pt-28 px-[8.125rem] sm:pt-10 sm:px-6">
        <div className="hero-section-1 w-full flex gap-3 sm:flex-col sm:gap-8">
          <HomeHeroSectionHeader />
          <HomeHeroSectionServiceCards />
        </div>
      </div>
    </>
  );
};

export default HomeHeroSection;
