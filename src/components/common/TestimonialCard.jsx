import React from 'react';

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0L10.3511 5.18237L16 6.02786L12 9.89263L12.9443 16L8 12.9824L3.05573 16L4 9.89263L0 6.02786L5.64886 5.18237L8 0Z" fill="white"/>
  </svg>
);

const TestimonialCard = ({ quote, name, company, role, avatar }) => (
  <div className="bg-[#055A6B] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-5 sm:p-8 lg:p-12 w-full max-w-[702px] mx-auto h-auto min-h-[240px] sm:min-h-[260px] lg:min-h-[291px] relative">
    {/* Rating */}
    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
      <div className="flex gap-0.5 sm:gap-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <span className="font-normal text-[14px] sm:text-[16px] leading-[1.4] lg:leading-[23px] text-white">5.0</span>
    </div>
    
    {/* Quote */}
    <p className="font-normal text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.5] lg:leading-[26px] text-white mb-6 sm:mb-8 max-w-[604px]">
      "{quote}"
    </p>
    
    {/* Author */}
    <div className="flex items-center gap-3 sm:gap-4">
      <div 
        className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full bg-cover bg-center flex-shrink-0"
        style={{ 
          backgroundImage: `url('${avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"}')`
        }}
      />
      <div>
        <h4 className="font-normal text-[14px] sm:text-[16px] leading-[1.4] lg:leading-[23px] text-white">{role}</h4>
        <span className="font-light text-[11px] sm:text-[12px] leading-[1.4] lg:leading-[17px] text-white">{name}, FOUNDER, {company}</span>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
