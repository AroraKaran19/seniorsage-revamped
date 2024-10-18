import React from "react";
import SeniorSageLogo from "../SeniorSageLogo";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const Links = [
    {
      head: "About Us",
      links: [
        { name: "Meet Our Team", url: "/about" },
        { name: "Careers", url: "https://www.linkedin.com/company/theseniorsage/jobs/" },
      ],
    },
    {
      head: "Services",
      links: [
        { name: "Github Analysis", url: "/services/github-analysis" },
        { name: "Resume Analysis", url: "/services/resume-analysis" },
        {
          name: "Course Recommendation",
          url: "/services/course-recommendation",
        },
        { name: "Roadmap", url: "/services/roadmap" },
      ],
    },
  ];

  return (
    <>
      <div className="footer w-full flex flex-col bg-[#1C1C1C]">

        <div className="footer-header w-full flex items-stretch border-b-2 border-white/30 gap-4 sm:flex-col sm:items-center sm:gap-6">
          <div className="footer-header-text text-white flex-1 flex items-center leading-none sm:text-center">
            You Virtual Senior here to assist you!
          </div>
          <div className="footer-header-btns flex-1 flex w-full justify-end gap-10 sm:justify-center">
            <div className="footer-get-started-btn bg-footer-get-started-bg bg-right bg-200-percent hover:bg-left hover:shadow-sm hover:shadow-white transition-all duration-300 ease-in-out flex justify-center items-center text-white rounded-3xl cursor-pointer">
              <span className="leading-none text-center select-none">
                Get Started {"->"}
              </span>
            </div>
            <div className="footer-contact-us-btn text-white flex justify-center items-center cursor-pointer">
              <span className="leading-none text-center select-none">
                Contact Us
              </span>
            </div>
          </div>
        </div>

        <div className="footer-content w-full flex min-h-[30.5rem] items-stretch gap-10 sm:min-h-0 sm:pt-10 sm:px-8 sm:flex-col">
          <div className="footer-content-left w-1/3 flex flex-col gap-10 sm:gap-2 sm:w-full">
            <div className="footer-logo flex sm:justify-center">
              <SeniorSageLogo
                fill="white"
                className="max-h-[74px] max-w-[364px]"
              />
            </div>
            <div className="footer-seniorsage-desc text-white/30 flex sm:justify-center sm:text-center">
              We don't sell unrealistic dreams - but surely will help you hit
              your highest potential!
            </div>
          </div>
          <div className="footer-content-right w-2/3 flex justify-end sm:justify-center sm:items-center sm:w-full">
            <FooterLinks Links={Links} />
          </div>
        </div>

        <div className="footer-bottom w-full flex bg-[#3A3A3A] text-white items-center justify-center text-center">
          All Rights Reserved 2024 © SeniorSage
        </div>
      </div>
    </>
  );
};

export default Footer;
