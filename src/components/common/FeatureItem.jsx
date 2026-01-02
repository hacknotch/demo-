import React from 'react';

const ScaleIcon = () => (
  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2L2 6V18L10 22L18 18V6L10 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 12L10 22" stroke="white" strokeWidth="2"/>
    <path d="M2 6L10 12L18 6" stroke="white" strokeWidth="2"/>
  </svg>
);

const ROIIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 25.6667C20.4433 25.6667 25.6667 20.4433 25.6667 14C25.6667 7.55668 20.4433 2.33334 14 2.33334C7.55668 2.33334 2.33334 7.55668 2.33334 14C2.33334 20.4433 7.55668 25.6667 14 25.6667Z" stroke="white" strokeWidth="2"/>
    <path d="M9.33334 14L12.8333 17.5L18.6667 11.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RoadmapIcon = () => (
  <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8H29" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 17H29" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 26H29" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="8" r="3" fill="white"/>
    <circle cx="23" cy="17" r="3" fill="white"/>
    <circle cx="17" cy="26" r="3" fill="white"/>
  </svg>
);

const SupportIcon = () => (
  <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 0L0 11.5H4V23H10V15H17V23H23V11.5H27L13.5 0Z" fill="white"/>
  </svg>
);

const ExpertIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2"/>
    <path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const getIcon = (title) => {
  if (title.includes('Scalable')) return <ScaleIcon />;
  if (title.includes('ROI')) return <ROIIcon />;
  if (title.includes('Roadmaps')) return <RoadmapIcon />;
  if (title.includes('Implementation')) return <SupportIcon />;
  if (title.includes('Expert')) return <ExpertIcon />;
  return <ScaleIcon />;
};

const FeatureItem = ({ title, iconPosition = 'right' }) => (
  <div 
    className="relative bg-white w-[381px] h-[104px] rounded-[22.5px] hover:shadow-md transition-shadow duration-300 border border-[#F05736]"
    style={{
      boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.02)',
      backdropFilter: 'blur(1.5px)'
    }}
  >
    {/* Orange Gradient Circle with Icon - LEFT position */}
    {iconPosition === 'left' && (
      <div 
        className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[78px] h-[78px] rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(157.6deg, #F05736 14.59%, #FBB12F 102.21%)'
        }}
      >
        {getIcon(title)}
      </div>
    )}

    {/* Text */}
    <span 
      className={`absolute top-[22px] w-[267px] font-normal text-[21px] leading-[30px] text-[#1A1A1A] ${
        iconPosition === 'left' ? 'left-[110px]' : 'left-[35px]'
      }`}
    >
      {title}
    </span>
    
    {/* Orange Gradient Circle with Icon - RIGHT position */}
    {iconPosition === 'right' && (
      <div 
        className="absolute right-[16px] top-1/2 -translate-y-1/2 w-[78px] h-[78px] rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(157.6deg, #F05736 14.59%, #FBB12F 102.21%)'
        }}
      >
        {getIcon(title)}
      </div>
    )}
  </div>
);

export default FeatureItem;
