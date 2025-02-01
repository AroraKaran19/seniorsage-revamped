"use client";
import React, { useContext } from 'react'
import { FileWrapper } from '../page';

const UploadOtherBtn = () => {
	const { setFile, setResumeData } = useContext(FileWrapper);

	const handleClick = () => {
		scrollTo({ top: 0, behavior: "smooth" });
		setFile(null);
		setResumeData(null);
	};

  return (
		<button
			className="analyse-btn w-max flex items-center cursor-pointer mt-2"
			onClick={handleClick}
		>
			<span className="flex-shrink-0">Analyse other resume {"->"}</span>
		</button>
  )
}

export default UploadOtherBtn