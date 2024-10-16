import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer w-full flex flex-col bg-[#1C1C1C]">
        <div className="footer-header w-full flex items-stretch sm:flex-col sm:items-center border-b-2 border-white/30">
          <div className="footer-header-text text-white flex-1 flex items-center">
            You Virtual Senior here to assist you!
          </div>
          <div className="footer-header-btns flex-1 flex w-full justify-end gap-10">
            <div className="footer-get-started-btn bg-footer-get-started-bg bg-right bg-200-percent hover:bg-left hover:shadow-sm hover:shadow-white transition-all duration-300 ease-in-out flex justify-center items-center text-white rounded-3xl gap-3 cursor-pointer">
              <span>Get Started {'->'}</span>
            </div>
            <div className="footer-contact-us-btn text-white flex justify-center items-center cursor-pointer">
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
