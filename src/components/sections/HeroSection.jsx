import React from 'react';
import Navigation from './Navigation';
import { Button } from '../common';
import { HERO_TAGS } from '../../constants';

const HeroSection = () => {
  const heroTags = HERO_TAGS;

  return (
    <section 
      className="relative w-full h-screen min-h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden rounded-b-[20px] sm:rounded-b-[30px]" 
      style={{ 
        backgroundImage: "url('/hero-bg.jpg')" 
      }}
      id="home"
    >
      {/* Gradient Overlay - matching Figma: opacity 0.25 */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{ 
          background: 'linear-gradient(270deg, rgba(102, 102, 102, 0.2) 0%, #000000 42.66%)' 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <Navigation />
        
        {/* Hero Content - positioned according to Figma */}
        <div className="px-5 sm:px-6 md:px-12 lg:px-24 pt-32 sm:pt-36 md:pt-40 lg:absolute lg:left-24 lg:top-[223px] lg:pt-0">
          <div className="max-w-full sm:max-w-[550px] lg:max-w-[650px]">
            {/* Powering Your Growth - top: 223px */}
            <h1 
              className="font-medium text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] leading-[1.25] lg:leading-[75px] text-white mb-4 sm:mb-6"
            >
              Powering Your Growth<br />with Modern IT Solutions
            </h1>
            
            {/* Description - top: 378px (155px below title) */}
            <p 
              className="font-normal text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] leading-[1.5] lg:leading-[38px] text-white mb-6 sm:mb-8 lg:mb-10 max-w-full sm:max-w-[500px] lg:max-w-[580px]"
            >
              Secure, stable operations powered by smart automation and 24/7 oversight.
            </p>
            
            {/* Button - Frame 14: top: 486px */}
            <Button size="large">
              Explore Services
            </Button>
          </div>
        </div>

        {/* Hero Tags - Bottom: top: 723px */}
        <div className="absolute bottom-12 sm:bottom-[80px] md:bottom-[100px] lg:bottom-[130px] left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-auto lg:right-[10%] xl:right-[15%] w-full px-4 sm:px-0 sm:w-auto flex flex-row items-center justify-center gap-3 sm:gap-6 md:gap-12">
          {heroTags.map((tag) => (
            <span 
              key={tag}
              className="flex items-center gap-2 sm:gap-4 font-medium text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] lg:leading-[29px] text-white whitespace-nowrap"
            >
              <span className="w-2 h-2 sm:w-[10px] sm:h-[10px] bg-white rounded-full flex-shrink-0" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
