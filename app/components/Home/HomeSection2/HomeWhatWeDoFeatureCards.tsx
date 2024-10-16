import React from "react";

const HomeWhatWeDoServiceCards = () => {
  return (
    <>
      <div className="feature-card-1 feature-card flex-1 flex min-h-[43.188rem] bg-[#8941FF] rounded-[3rem] pt-[4.25rem] shadow-2xl hover:mt-[4.25rem] hover:pt-0 hover:min-h-[38.938rem] transition-all duration-500 ease-in-out sm:min-h-0 sm:w-full sm:hover:mt-0 sm:hover:pt-[4.25rem] sm:hover:min-h-0">
        <div className="feature-card-1-inner h-full w-full rounded-[2.8rem] bg-white shadow-lg hover:shadow-[#8941FF] transition-all duration-[500ms] ease-in-out border-[0.5px] border-black/40 overflow-hidden relative">
          <div className="feature-number absolute text-[41rem] text-[#8941FF] text-opacity-10 leading-none h-fit w-fit top-[-5%] right-5 z-40">1</div>
          <div className="number-blur absolute top-2/3 bg-white/40 w-full z-[55] h-full backdrop-blur-[1px]"></div>
          <div className="feature-container h-full w-full gap-[2.375rem] flex flex-col transition-all duration-[300ms] ease-in-out transform translate-y-[40%] sm:translate-y-0 px-[3.25rem] sm:py-5 z-[60] relative">
            <div className="feature-logo bg-[#F1E9FF] p-5 rounded-full w-fit">
              <img
                src="/feature-github.png"
                alt="Github Logo"
                draggable={false}
              />
            </div>
            <div className="feature-info w-full flex flex-col gap-[1.25rem]">
              <div className="feature-name sm:text-center">GITHUB ANALYSIS</div>
              <div className="feature-desc flex flex-wrap sm:justify-center sm:text-center">
                Unlocking insights from code!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-card-2 feature-card flex-1 flex min-h-[43.188rem] bg-[#4C9FFF] rounded-[3rem] pt-[4.25rem] shadow-2xl hover:mt-[4.25rem] hover:pt-0 hover:min-h-[38.938rem] transition-all duration-500 ease-in-out sm:min-h-0 sm:w-full sm:hover:mt-0 sm:hover:pt-[4.25rem] sm:hover:min-h-0">
        <div className="feature-card-2-inner h-full w-full rounded-[2.8rem] bg-white shadow-lg hover:shadow-[#4C9FFF] transition-all duration-[500ms] ease-in-out border-[0.5px] border-black/40 overflow-hidden relative">
        <div className="feature-number absolute text-[41rem] text-[#4C9FFF] text-opacity-10 leading-none h-fit w-fit top-[-5%] right-5 z-40">2</div>
        <div className="number-blur absolute top-2/3 bg-white/40 w-full z-[55] h-full backdrop-blur-[1px]"></div>
          <div className="feature-container h-full w-full gap-[2.375rem] flex flex-col transition-all duration-[300ms] ease-in-out transform translate-y-[40%] sm:translate-y-0 px-[3.25rem] z-[60] sm:py-5 relative">
            <div className="feature-logo bg-[#E2F0FF] p-5 rounded-full w-fit">
              <img src="/feature-resume.png" alt="Resume Icon" />
            </div>
            <div className="feature-info w-full flex flex-col gap-[1.25rem]">
              <div className="feature-name sm:text-center">RESUME SCORE</div>
              <div className="feature-desc flex flex-wrap sm:justify-center sm:text-center">
                Transforming resumes into market-ready masterpieces!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-card-3 feature-card flex-1 flex min-h-[43.188rem] bg-[#FF783F] rounded-[3rem] pt-[4.25rem] shadow-2xl hover:mt-[4.25rem] hover:pt-0 hover:min-h-[38.938rem] transition-all duration-500 ease-in-out sm:min-h-0 sm:w-full sm:hover:mt-0 sm:hover:pt-[4.25rem] sm:hover:min-h-0">
        <div className="feature-card-3-inner h-full w-full rounded-[2.8rem] bg-white shadow-lg hover:shadow-[#FF783F] transition-all duration-[500ms] ease-in-out border-[0.5px] border-black/40 overflow-hidden relative">
        <div className="feature-number absolute text-[41rem] text-[#FF783F] text-opacity-10 leading-none h-fit w-fit top-[-5%] right-5 z-40">3</div>
        <div className="number-blur absolute top-2/3 bg-white/40 w-full z-[55] h-full backdrop-blur-[1px]"></div>
          <div className="feature-container h-full w-full gap-[2.375rem] flex flex-col transition-all duration-[300ms] ease-in-out transform translate-y-[40%] sm:translate-y-0 px-[3.25rem] z-[60] sm:py-5 relative">
            <div className="feature-logo bg-[#FDE4D9] p-5 rounded-full w-fit">
              <img src="/feature-roadmap.png" alt="Roadmap Icon" />
            </div>
            <div className="feature-info w-full flex flex-col gap-[1.25rem]">
              <div className="feature-name sm:text-center">ROAD MAP</div>
              <div className="feature-desc flex flex-wrap sm:justify-center sm:text-center">
                Guided journey through future milestones!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWhatWeDoServiceCards;
