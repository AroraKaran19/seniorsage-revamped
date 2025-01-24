import React from "react";
import ServiceLink from "./components/ServiceLink";
import UploadResumeBtn from "./components/UploadResumeBtn";
import TeamImages from "./components/TeamImages";
import MeetTeamBtn from "./components/MeetTeamBtn";
import Quote from "../../common/Svgs/Quote";

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
      <div className="service-card service-card-1 flex-1 min-h-[31.375rem] rounded-[3rem] bg-[#EADEFE] sm:pt-0 sm:h-max sm:min-h-0 sm:w-full sm:rounded-2xl">
        <div className="service-card-1-inner flex flex-col h-full w-full rounded-[2.8rem] bg-[#8941FF] sm:rounded-2xl">
          <Quote />
          <div className="service-card-header flex flex-col w-full pt-[1.125rem] pb-8 leading-none text-white sm:pt-2 sm:pb-4">
            <p>For Juniors</p>
            <p>From Seniors</p>
          </div>
          <div className="services-provided-wrapper flex flex-wrap w-full gap-3 pt-5 sm:flex-col">
            {servicesProvided.map((service, index) => (
              <ServiceLink key={index} name={service.name} url={service.url} />
            ))}
          </div>
        </div>
      </div>

      <div className="service-card service-card-2 flex-1 min-h-[31.375rem] rounded-[3rem] bg-[#4C9FFF] sm:w-full sm:min-h-0 sm:rounded-2xl">
        <div className="service-card-2-inner flex flex-col w-full rounded-[2.8rem] relative h-full sm:flex-row sm:items-stretch sm:justify-stretch">
          <div className="service-card-header flex flex-col relative w-full top-0 leading-none text-white sm:relative sm:flex-none sm:w-fit">
            <p>Want to review</p>
            <p>your resume</p>
            <p>score?</p>
          </div>
          <UploadResumeBtn />
        </div>
      </div>

      <div className="service-card service-card-3 flex-1 w-max min-h-[31.375rem] rounded-[3rem] bg-[#FDE4D9] sm:w-full sm:min-h-0 sm:pt-0">
        <div className="service-card-3-inner flex flex-col w-full h-full rounded-[2.8rem] bg-[#FF783F] sm:p-7 sm:rounded-2xl sm:gap-6">
          <div className="team-images-wrapper w-max flex flex-wrap">
            <TeamImages />
          </div>
          <MeetTeamBtn />
        </div>
      </div>
    </>
  );
};

export default HomeHeroSectionServiceCards;
