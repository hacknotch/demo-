import React from 'react';

const AIAdoptionSection = () => (
  <section className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full" id="about">
    <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-20 items-center justify-center">
      {/* Title */}
      <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-left">
        <h2 className="font-medium text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[68px] leading-[1.2] lg:leading-[1.25] text-black">
          AI Adoption<br />
          Consulting to<br />
          Transform<br />
          <span className="text-[#F6A623]">Your Business</span>
        </h2>
      </div>
      
      {/* Content */}
      <div className="lg:pt-4 xl:pt-6 text-center lg:text-left">
        <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] leading-[1.6] lg:leading-[36px] text-[#1A1A1A] max-w-[550px] lg:max-w-[600px]">
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
