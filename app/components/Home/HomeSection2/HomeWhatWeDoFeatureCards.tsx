"use client";
import React, { useRef, useState } from "react";
import FeatureCard from "./components/FeatureCard";

const featureCardData = [
  {
    bgColor: "bg-[#8941FF]",
    shadowColor: "#8941FF",
    featureNumber: 1,
    imgSrc: "/feature-github.png",
    imgAlt: "Github Logo",
    featureName: "GITHUB ANALYSIS",
    featureDesc: "Unlocking insights from code!",
    imgBgColor: "bg-[#F1E9FF]",
    route: "/github-analysis",
  },
  {
    bgColor: "bg-[#4C9FFF]",
    shadowColor: "#4C9FFF",
    featureNumber: 2,
    imgSrc: "/feature-resume.png",
    imgAlt: "Resume Icon",
    featureName: "RESUME SCORE",
    featureDesc: "Transforming resumes into market-ready masterpieces!",
    imgBgColor: "bg-[#E2F0FF]",
  },
  {
    bgColor: "bg-[#ff33a6]",
    shadowColor: "#ff33a6",
    featureNumber: 3,
    imgSrc: "/feature-courses.png",
    imgAlt: "Course Recommendation Icon",
    featureName: "Course Recommendation",
    featureDesc: "Get personalized course recommendations!",
    imgBgColor: "bg-[#FFD9F2]",
  },
  {
    bgColor: "bg-[#FF783F]",
    shadowColor: "#FF783F",
    featureNumber: 4,
    imgSrc: "/feature-roadmap.png",
    imgAlt: "Roadmap Icon",
    featureName: "ROAD MAP",
    featureDesc: "Guided journey through future milestones!",
    imgBgColor: "bg-[#FDE4D9]",
  },
];

const HomeWhatWeDoServiceCards = () => {

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft + 1;
    const walk = Math.ceil(x - startX); // Scroll Speed
    carouselRef.current.scrollTo({
      left: scrollLeft - walk,
      behavior: "smooth",
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`what-we-do-feature-cards w-full flex items-stretch gap-[3.2rem] py-2 select-none overflow-auto scroll-smooth sm:flex-col sm:items-start sm:gap-8 max-w-full ${isDragging ? "cursor-grabbing" : "cursor-default"}`}
      draggable={false}
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {featureCardData.map((card, index) => (
        <FeatureCard key={index} {...card} containerState={isDragging} />
      ))}
    </div>
  );
};

export default HomeWhatWeDoServiceCards;
