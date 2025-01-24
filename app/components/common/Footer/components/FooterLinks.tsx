"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface FooterLinksProps {
  Links: {
    head: string;
    links: {
      name: string;
      url: string;
    }[];
  }[];
}

const FooterLinks = ({ Links }: FooterLinksProps) => {
  const currentPath = usePathname();
  const router = useRouter();

  const handleClick = (url: string) => {
    if (url === currentPath) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 150);
    router.push(url);
  };

  return (
    <>
      <div className="footer-links flex gap-[8.5rem] sm:gap-12 sm:justify-center sm:items-stretch">
        {Links.map((link, index) => (
          <div key={index} className="footer-link-section flex flex-col gap-6">
            <div className="footer-link-section-head text-white leading-none">
              {link.head}
            </div>
            <div className="footer-link-section-links flex flex-col gap-3">
              {link.links.map((link, index) => (
                <div
                  key={index}
                  className="footer-link-section-link text-white/40 hover:text-white/60 cursor-pointer leading-none"
                  onClick={() => handleClick(link.url)}
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FooterLinks;
