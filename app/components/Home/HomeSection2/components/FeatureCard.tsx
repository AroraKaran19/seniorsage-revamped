"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface FeatureCardProps {
  bgColor: string;
  shadowColor: string;
  featureNumber: number;
  imgSrc: string;
  imgAlt: string;
  featureName: string;
  featureDesc: string;
  imgBgColor: string;
  route?: string;
	containerState?: boolean;
}

const FeatureCard = ({
  bgColor,
  shadowColor,
  featureNumber,
  imgSrc,
  imgAlt,
  featureName,
  featureDesc,
  imgBgColor,
  route,
	containerState,
}: FeatureCardProps) => {

	const router = useRouter();
	const handleClick = () => {
		if (route) {
			router.push("services/" + route);
		}
	};

  return (
    <div
      className={`feature-card w-[calc(100%/3-clamp(40px,5vw,80px))] flex min-h-[43.188rem] ${bgColor} rounded-[3rem] pt-[4.25rem] transition-all duration-500 ease-in-out shrink-0 sm:min-h-0 sm:w-full ${!containerState ? "hover:mt-[4.25rem] hover:pt-0 hover:min-h-[38.938rem] sm:hover:mt-0 sm:hover:pt-[4.25rem] sm:hover:min-h-0" : ""}  `}
      data-container-state={containerState}
    >
      <div
        className={`feature-card-inner h-full w-full rounded-[2.8rem] bg-white shadow-lg hover:shadow-[${shadowColor}] transition-all duration-[500ms] ease-in-out border-[0.5px] border-black/40 overflow-hidden relative ${!containerState ? route ? "cursor-pointer" : "cursor-default" : ""} `} onClick={handleClick}
      >
        <div
          className={`feature-number absolute leading-none h-fit w-fit top-[-5%] right-5 z-40 sm:top-3`} style={{ color: shadowColor, opacity: 0.1 }}
        >
          {featureNumber}
        </div>
        <div className="number-blur absolute top-2/3 bg-white/50 w-full z-[55] h-full backdrop-blur-[1px]"></div>
        <div className="feature-container h-max w-full gap-[2.375rem] flex flex-col transition-all duration-1000 ease-in-out px-[3.25rem] transform bottom-0 py-5 z-[60] absolute will-change-transform">
          <div className={`feature-logo ${imgBgColor} p-5 rounded-full w-fit`}>
            <img src={imgSrc} alt={imgAlt} draggable={false} />
          </div>
          <div className="feature-info w-full flex flex-col gap-[1.25rem]">
            <div className="feature-name sm:text-center">{featureName}</div>
            <div className="feature-desc flex flex-wrap sm:justify-center sm:text-center">
              {featureDesc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
