import React from 'react';

const ServiceCard = ({ title, description, image }) => (
  <div className="bg-[#055A6B] rounded-[40px] relative w-[420px] h-[540px] overflow-hidden group">
    {/* Title - Professional Services */}
    <div className="absolute left-[32px] top-[35px]">
      <h3 className="font-normal text-[32px] leading-[48px] text-[#E9E9E9]">
        {title}
      </h3>
    </div>
    
    {/* Line 2 - Divider */}
    <div className="absolute left-0 top-[100px] w-[420px] h-0 border-t-[0.5px] border-[#9A9A9A]" />
    
    {/* Description */}
    <p className="absolute left-[32px] top-[130px] w-[300px] font-normal text-[18px] leading-[26px] text-white">
      {description}
    </p>
    
    {/* Arrow Icon - Vector button - bottom right of text area */}
    <div 
      className="absolute right-[30px] top-[480px] w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-20"
      style={{
        background: 'linear-gradient(135deg, #F05736 0%, #FBB12F 100%)'
      }}
    >
      <svg 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M7 17L17 7M17 7H7M17 7V17" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>

    {/* Frame 65 - Shadow layer */}
    <div className="absolute left-1/2 -translate-x-1/2 top-[230px] w-[345px] h-[230px] bg-[rgba(8,17,19,0.2)] rounded-[10px]" />
    
    {/* Frame 66 - Middle layer */}
    <div className="absolute left-1/2 -translate-x-1/2 top-[250px] w-[390px] h-[255px] bg-[#173137] rounded-[20px]" />
    
    {/* Frame 64 - Main Image */}
    <div 
      className="absolute left-1/2 -translate-x-1/2 top-[275px] w-[420px] h-[265px] bg-cover bg-center rounded-[40px] group-hover:scale-[1.02] transition-transform duration-300"
      style={{ backgroundImage: `url(${image})` }}
    />
  </div>
);

export default ServiceCard;
