import React from "react";
import GetStartedBtn from "./GetStartedBtn";

const HomeHeroSectionHeader = () => {

  return (
    <>
      <div className="hero-section-left flex-1">
        <p className="uppercase leading-none select-none">
          Are you up for career boost in seconds?
        </p>
      </div>
      <div className="hero-section-right flex-1 flex flex-col gap-10 sm:gap-4">
        <p className="hero-section-right-header select-none text-black/55">
          We don't sell unrealistic dreams - but surely will help you hit your
          highest potential!
        </p>
        <GetStartedBtn />
      </div>
    </>
  );
};

export default HomeHeroSectionHeader;
