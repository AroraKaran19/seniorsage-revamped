import HomeHeroSection from "./components/Home/HomeHeroSection";
import "./components/Home/Home.css";
import { Metadata } from "next";
import WhatWeDoSection from "./components/Home/WhatWeDoSection";

export const metadata: Metadata = {
  title: "SeniorSage - Your Virtual Senior",
  description: "The virtual senior needed for success!",
};

export default function Home() {

  
  return (
    <>
      <HomeHeroSection />
      <WhatWeDoSection />
    </>
  );
}
