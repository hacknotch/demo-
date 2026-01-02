import React from 'react';
import { FeatureItem } from '../common';

const WhyChooseSection = () => {
  const featuresRow1 = [
    { id: 1, title: 'Scalable Solutions for any Business Size', iconPosition: 'right' },
    { id: 2, title: 'Focus on ROI and Business Outcome', iconPosition: 'right' },
    { id: 3, title: 'Customized AI Roadmaps', iconPosition: 'right' },
  ];

  const featuresRow2 = [
    { id: 4, title: 'Hands-on Implementation Support', iconPosition: 'left' },
    { id: 5, title: 'Expert Teams in AI Technologies and Trends', iconPosition: 'left' },
  ];

  return (
    <section className="px-4 sm:px-5 md:px-10 lg:px-20 xl:px-32 w-full">
      <div className="w-full mx-auto h-auto">
        <h2 className="font-bold text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-[1.4] lg:leading-[58px] text-black text-center mb-8 sm:mb-10 lg:mb-16">
          Why Choose Us For AI Adoption?
        </h2>
        
        {/* Features Grid */}
        <div className="flex flex-col gap-6 lg:gap-8 items-center">
          {/* Row 1 - 3 items */}
          <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-8 items-center">
            {featuresRow1.map((feature) => (
              <FeatureItem
                key={feature.id}
                title={feature.title}
                iconPosition={feature.iconPosition}
              />
            ))}
          </div>
          
          {/* Row 2 - 2 items centered with slight offset to right */}
          <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-8 items-center lg:ml-[100px]">
            {featuresRow2.map((feature) => (
              <FeatureItem
                key={feature.id}
                title={feature.title}
                iconPosition={feature.iconPosition}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
