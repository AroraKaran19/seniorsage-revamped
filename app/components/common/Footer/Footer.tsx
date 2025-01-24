import React from "react";
import SeniorSageLogo from "../SeniorSageLogo";
import FooterLinks from "./components/FooterLinks";
import "./footer.css";

const Footer = () => {
  const Links = [
    {
      head: "About Us",
      links: [
        { name: "Meet Our Team", url: "/about" },
        {
          name: "Careers",
          url: "https://www.linkedin.com/company/theseniorsage/jobs/",
        },
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
              We don&apos;t sell unrealistic dreams - but surely will help you
              hit your highest potential!
            </div>
          </div>
          <div className="footer-content-right w-2/3 flex justify-end sm:justify-center sm:items-center sm:w-full">
            <FooterLinks Links={Links} />
          </div>
        </div>

        <div className="footer-bottom w-full flex bg-[#3A3A3A] text-white items-center justify-center text-center">
          All Rights Reserved 2024
          <span className="flex h-full items-center mx-1">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
            >
              <path
                d="M13.392 10.4362L14.8106 9.0176C14.1031 8.38476 13.169 8 12.145 8C9.93588 8 8.14502 9.79086 8.14502 12C8.14502 14.2091 9.93588 16 12.145 16C13.2563 16 14.2617 15.5468 14.9866 14.8152L13.674 13.5026L13.4646 13.503C13.1124 13.8124 12.6506 14 12.145 14C11.0405 14 10.145 13.1046 10.145 12C10.145 10.8954 11.0405 10 12.145 10C12.6166 10 13.0501 10.1632 13.392 10.4362Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5Z"
                fill="currentColor"
              />
            </svg>
          </span>
          SeniorSage
        </div>
      </div>
    </>
  );
};

export default Footer;
