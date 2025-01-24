"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface ServiceLinks {
  name: string;
  url: string;
}

const ServiceLink = ({ name, url }: ServiceLinks) => {
  const router = useRouter();

  const Navigate = (url: string) => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 150);
    router.push(url);
  };

  return (
    <div className="service flex text-[#8941FF] py-2 px-[1.125rem] bg-white rounded-2xl cursor-pointer w-max sm:w-full sm:justify-center">
      <div onClick={() => Navigate(url)} className="service-link leading-none">
        {name}
      </div>
    </div>
  );
};

export default ServiceLink;
