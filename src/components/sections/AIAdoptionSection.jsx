import React from 'react';

const AIAdoptionSection = () => (
  <section className="px-6 sm:px-10 md:px-16 lg:px-30 xl:px-40 w-full" id="about">
    <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-20 xl:gap-32 items-center justify-center lg:justify-start lg:pl-[15%] xl:pl-[20%]">
      {/* Title */}
      <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-left">
        <h2 className="font-medium text-[38px] sm:text-[48px] md:text-[60px] lg:text-[72px] xl:text-[80px] leading-[1.2] lg:leading-[1.25] text-black">
          AI Adoption<br />
          Consulting to<br />
          Transform<br />
          <span className="text-[#F6A623]">Your Business</span>
        </h2>
      </div>
      
      {/* Content */}
      <div className="lg:pt-4 xl:pt-6 text-center lg:text-left">
        <p className="font-normal text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] leading-[1.6] lg:leading-[38px] text-[#1A1A1A] max-w-[650px]">
          At Elowen, we help businesses harness the power of Artificial Intelligence (AI) 
          to drive innovation, improve decision-making, and automate processes. Our AI 
          adoption consulting services are designed to help you seamlessly integrate AI 
          technologies into your operations, allowing you to stay competitive in an 
          increasingly data-driven world.
        </p>
      </div>
    </div>
  </section>
);

export default AIAdoptionSection;
