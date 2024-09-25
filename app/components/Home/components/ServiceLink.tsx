"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface ServiceLinks {
	name: string;
	url: string;
}

const ServiceLink = ({name, url }: ServiceLinks) => {

	const router = useRouter();

	const Navigate = (url: string) => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}, 150);
		router.push(url);
	}

  return (
		<>
			<div onClick={() => Navigate(url)} className="service-link leading-none">{name}</div>
		</>
	);
};

export default ServiceLink;
