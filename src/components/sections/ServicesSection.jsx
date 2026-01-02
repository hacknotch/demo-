import React from 'react';
import { ServiceCard } from '../common';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Professional Services',
      description: 'Expert professional services tailored to drive business success and strategic growth.',
      image: '/hero-bg.jpg',
    },
    {
      id: 2,
      title: 'IT Infrastructure',
      description: 'Comprehensive managed IT and infrastructure services to optimize and secure your business operations.',
      image: '/hero-bg.jpg',
    },
    {
      id: 3,
      title: 'Managed Security',
      description: 'Robust managed security services to protect your business from evolving cyber threats.',
      image: '/hero-bg.jpg',
    },
  ];

  return (
    <section 
      className="w-full" 
      id="services"
    >
      <div 
        className="w-full min-h-[700px] sm:min-h-[800px] lg:min-h-[900px] rounded-b-[20px] sm:rounded-b-[30px] px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 py-12 sm:py-16 lg:py-20"
        style={{
          background: 'linear-gradient(180deg, #194952 -21.18%, #081417 64.31%)'
        }}
      >
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 sm:mb-8 lg:mb-[36px] gap-4 sm:gap-5">
        <h2 
          className="font-medium text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.4] lg:leading-[58px] text-white"
          style={{
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.02)',
            backdropFilter: 'blur(2px)'
          }}
        >
          Our Services
        </h2>
        <p className="font-normal text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] lg:leading-[26px] text-white max-w-[480px] lg:max-w-[520px] text-left lg:text-right">
          From managed services to cybersecurity and AI adoption, we build reliable 
          technology foundations for long-term success.
        </p>
      </div>
      
      {/* Divider Line */}
      <div className="w-full h-[1px] bg-[#9A9A9A] opacity-50 mt-6 sm:mt-8 lg:mt-10" />
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-10 xl:gap-16 justify-items-center mt-16 sm:mt-20 lg:mt-28">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default ServicesSection;
