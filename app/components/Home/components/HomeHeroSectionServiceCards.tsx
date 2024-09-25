import DoubleQuotesSVG from "@/public/DoubleQuotesSVG";
import React from "react";
import ServiceLink from "./ServiceLink";
import UploadResumeBtn from "./UploadResumeBtn";
import TeamImages from "./TeamImages";

const HomeHeroSectionServiceCards = () => {
  const servicesProvided = [
    {
      name: "Courses",
      url: "/services/course-recommendation",
    },
    {
      name: "Resume Analysis",
      url: "/services/resume-analysis",
    },
    {
      name: "Github Analysis",
      url: "/services/github-analysis",
    },
    {
      name: "More Soon +",
      url: "/services",
    },
  ];

  return (
    <>
      <div className="service-card service-card-1 flex-1 min-h-[31.375rem] rounded-[3rem] pt-24 bg-[#EADEFE] sm:pt-0 sm:h-max sm:min-h-0 sm:w-full sm:rounded-2xl">
        <div className="service-card-1-inner flex flex-col h-full w-full rounded-[2.8rem] bg-[#8941FF] py-[3.75rem] px-[3.25rem] sm:py-[2rem] sm:px-[2rem] sm:rounded-2xl md:px-[2.5rem] md:py-[2.75rem]">
          <DoubleQuotesSVG />
          <div className="service-card-header flex flex-col w-full pt-[1.125rem] pb-8 leading-none text-white sm:pt-2 sm:pb-4">
            <p>For Juniors</p>
            <p>From Seniors</p>
          </div>
          <div className="services-provided-wrapper flex flex-wrap w-full items-stretch gap-3 sm:flex-col">
            {servicesProvided.map((service, index) => (
              <div
                key={index}
                className="service flex text-[#8941FF] py-2 px-[1.125rem] bg-white rounded-2xl cursor-pointer sm:justify-center"
              >
                <ServiceLink name={service.name} url={service.url} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="service-card service-card-2 flex-1 min-h-[31.375rem] rounded-[3rem] bg-[#4C9FFF] sm:w-full sm:min-h-0 sm:rounded-2xl">
        <div className="service-card-2-inner flex flex-col w-full rounded-[2.8rem] relative h-full sm:flex-row sm:items-stretch sm:justify-stretch">
          <div className="service-card-header flex flex-col absolute w-full top-0 pt-14 px-14 leading-none text-white sm:relative sm:py-5 sm:px-6 sm:flex-none sm:w-fit">
            <p>Want to review</p>
            <p>your resume</p>
            <p>score?</p>
          </div>
          <UploadResumeBtn />
        </div>
      </div>

      <div className="service-card service-card-3 flex-1 min-h-[31.375rem] rounded-[3rem] bg-[#FDE4D9] pt-[14.625rem] sm:w-full sm:min-h-0">
        <div className="service-card-3-inner flex flex-col w-full h-full rounded-[2.8rem] bg-[#FF783F] p-11">
          <div className="team-images-wrapper w-full flex">
            <TeamImages />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeroSectionServiceCards;
