import React from 'react';

const ServiceCard = ({ title, description, image }) => (
  <div className="bg-[#055A6B] rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] h-[450px] sm:h-[520px] md:h-[570px] lg:h-[620px] overflow-hidden group">
    {/* Title - Professional Services */}
    <div className="absolute left-[20px] sm:left-[28px] lg:left-[36px] top-[25px] sm:top-[32px] lg:top-[40px]">
      <h3 className="font-normal text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.4] lg:leading-[52px] text-[#E9E9E9]">
        {title}
      </h3>
    </div>
    
    {/* Line 2 - Divider */}
    <div className="absolute left-0 top-[80px] sm:top-[95px] lg:top-[115px] w-full h-0 border-t-[0.5px] border-[#9A9A9A]" />
    
    {/* Description */}
    <p className="absolute left-[20px] sm:left-[28px] lg:left-[36px] top-[100px] sm:top-[120px] lg:top-[145px] w-[85%] sm:w-[300px] lg:w-[350px] font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] lg:leading-[30px] text-white">
      {description}
    </p>
    
    {/* Arrow Icon - Vector button - bottom right of text area */}
    <div 
      className="absolute right-[20px] sm:right-[28px] lg:right-[35px] bottom-[20px] sm:bottom-[25px] lg:bottom-[30px] w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[45px] lg:h-[45px] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-20 bg-white"
    >
      <svg 
        className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]"
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M7 17L17 7M17 7H7M17 7V17" 
          stroke="#F05736" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>

    {/* Frame 65 - Shadow layer */}
    <div className="absolute left-1/2 -translate-x-1/2 top-[200px] sm:top-[230px] lg:top-[265px] w-[85%] sm:w-[330px] lg:w-[395px] h-[180px] sm:h-[220px] lg:h-[265px] bg-[rgba(8,17,19,0.2)] rounded-[8px] sm:rounded-[10px]" />
    
    {/* Frame 66 - Middle layer */}
    <div className="absolute left-1/2 -translate-x-1/2 top-[220px] sm:top-[255px] lg:top-[290px] w-[90%] sm:w-[370px] lg:w-[445px] h-[200px] sm:h-[250px] lg:h-[295px] bg-[#173137] rounded-[15px] sm:rounded-[18px] lg:rounded-[20px]" />
    
    {/* Frame 64 - Main Image */}
    <div 
      className="absolute left-1/2 -translate-x-1/2 top-[245px] sm:top-[285px] lg:top-[320px] w-full h-[205px] sm:h-[235px] lg:h-[300px] bg-cover bg-center rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] group-hover:scale-[1.02] transition-transform duration-300"
      style={{ backgroundImage: `url(${image})` }}
    />
  </div>
);

export default ServiceCard;
