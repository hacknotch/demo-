import React from 'react';
import { Button } from '../common';

const CTASection = () => (
  <section className="px-4 sm:px-5 md:px-10 lg:px-20 xl:px-32 w-full">
    <div className="max-w-[1200px] mx-auto h-auto lg:h-[269px] text-center flex flex-col items-center">
      <h2 
        className="font-medium text-[22px] sm:text-[28px] md:text-[38px] lg:text-[45px] leading-[1.35] lg:leading-[65px] text-[#1A1A1A] mb-3 sm:mb-4"
        style={{
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.02)',
          backdropFilter: 'blur(2px)'
        }}
      >
        Ready to Build a Smarter IT Foundation?
      </h2>
      <p className="font-normal text-[14px] sm:text-[18px] md:text-[22px] lg:text-[24px] leading-[1.5] lg:leading-[35px] text-[#1A1A1A] max-w-[581px] mb-6 sm:mb-8 px-2">
        Partner with Elowen IT to secure, manage, and scale your technology with confidence.
      </p>
      <Button size="large">
        Get in Touch
      </Button>
    </div>
  </section>
);

export default CTASection;
