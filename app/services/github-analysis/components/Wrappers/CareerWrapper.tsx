import LoadingDots from '@/app/components/common/LoadingDots';
import React from 'react'

const CareerWrapper = ({ career, status } : { career: string | null; status: string | undefined }) => {
  return (
    <div className="career-wrapper w-full flex bg-[#FDE4D9] justify-between items-stretch rounded-[4rem] relative gap-2 sm:flex-col sm:bg-transparent sm:gap-5">
      <div className="career-wrapper-left-side w-[42%] max-w-[42%] lg:max-w-[50%] bg-[#ff783f] rounded-[3rem] flex flex-col flex-grow gap-6 sm:w-full sm:max-w-full">
        <p className="w-2/3 sm:w-full sm:text-center">You could try</p>
        <div className="show-career-recommendation-wrapper bg-white/20 rounded-[2rem] w-full break-words flex justify-center">
          <div className="career-recommendation text-center">{status != "false" ? (career ? career : <div className='flex gap-1'><span>Analyzing</span><LoadingDots /></div>) : "Unable to Analyze!"}</div>
        </div>
        <p className="w-2/3 sm:w-full sm:text-center">as career</p>
      </div>
      <div className="career-wrapper-right-side w-[42%] bg-[#ff783f] rounded-[3rem] flex-shrink sm:hidden"></div>
    </div>
  )
}

export default CareerWrapper