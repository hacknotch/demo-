import React from 'react';

const ArrowIcon = () => (
  <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-3 relative top-1">
    <g filter="url(#filter0_d_179_366)">
      <path d="M33.874 29.874C37.1558 26.5921 39 22.1421 39 17.5C39 12.8579 37.1559 8.40774 33.874 5.12604C30.5921 1.84417 26.1421 0 21.5 0C16.8579 0 12.4077 1.84412 9.12604 5.12604C5.84417 8.4079 4 12.8579 4 17.5C4 22.1421 5.84412 26.5923 9.12604 29.874C12.4079 33.1558 16.8579 35 21.5 35C26.1421 35 30.5923 33.1559 33.874 29.874ZM15.4552 23.4428C15.2714 23.2611 15.1693 23.014 15.1693 22.7546C15.1693 22.4973 15.2714 22.2502 15.4552 22.0664L24.3739 13.1477H18.3636C17.8429 13.1232 17.4344 12.6943 17.4344 12.1735C17.4344 11.6527 17.8429 11.2259 18.3636 11.2014H26.7961C27.3332 11.2014 27.7682 11.6384 27.7682 12.1756V20.6776C27.7682 21.2167 27.3332 21.6517 26.7961 21.6538C26.259 21.6517 25.824 21.2167 25.824 20.6776V14.4587L16.8321 23.4506H16.8301C16.6483 23.6344 16.4012 23.7365 16.1439 23.7365C15.8845 23.7365 15.6374 23.6344 15.4556 23.4506L15.4552 23.4428Z" fill="url(#paint0_linear_179_366)"/>
    </g>
    <defs>
      <filter id="filter0_d_179_366" x="0" y="-4" width="43" height="47" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_366"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_366" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_179_366" x1="33.1667" y1="0" x2="7.5" y2="40.8333" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F05736"/>
        <stop offset="1" stopColor="#FBB12F"/>
      </linearGradient>
    </defs>
  </svg>
);

const TechnologySection = () => (
  <section className="px-4 sm:px-5 md:px-10 lg:px-20 text-center w-full max-w-[1200px] mx-auto">
    <div className="flex flex-col gap-4 sm:gap-5">
      {/* Title */}
      <div className="relative flex items-center justify-center">
        <h2 
          className="font-medium text-[24px] sm:text-[30px] md:text-[38px] lg:text-[45px] leading-[1.3] lg:leading-[58px] text-[#1A1A1A] inline-flex items-baseline"
          style={{
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.02)',
            backdropFilter: 'blur(2px)'
          }}
        >
          <span>Technology Solutions for Modern Businesses</span>
          <ArrowIcon />
        </h2>
      </div>
      <p className="font-normal text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] leading-[1.5] lg:leading-[38px] text-[#1A1A1A] max-w-[750px] mx-auto">
        We deliver secure, scalable, and intelligent IT services that help 
        organizations operate efficiently and grow with confidence.
      </p>
    </div>
  </section>
);

export default TechnologySection;
