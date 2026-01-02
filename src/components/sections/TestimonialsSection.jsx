import React from 'react';
import { TestimonialCard } from '../common';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "With Elowen's resource outsourcing model, we reduced hiring costs and onboarded trained talent in record time. Their people are dependable, proactive, and always deliver. The Elowen People program allowed us to focus on strategy while their experts handled day-to-day IT execution. Their ability to upskill talent as we grew was invaluable.",
      name: 'P MOHANTY',
      company: 'INTELLIROOT',
      role: 'Quality Engineering',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    },
  ];

  return (
    <section className="w-full h-auto lg:min-h-[685px] gradient-teal px-4 sm:px-5 md:px-10 lg:px-20 xl:px-32 py-10 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="w-full mx-auto">
      <h2 
        className="font-medium text-[22px] sm:text-[26px] md:text-[34px] lg:text-[40px] leading-[1.4] lg:leading-[58px] text-white text-center mb-4 sm:mb-5"
        style={{
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.02)',
          backdropFilter: 'blur(2px)'
        }}
      >
        Real Client Testimonials. Real Results.
      </h2>
      <p className="font-normal text-[14px] sm:text-[18px] md:text-[22px] lg:text-[24px] leading-[1.5] lg:leading-[35px] text-white text-center max-w-[626px] mx-auto mb-8 sm:mb-10 lg:mb-16 px-2">
        Hear how businesses trust Elowen IT to deliver reliable, secure, and scalable technology solutions.
      </p>
      
      {/* Slider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-8">
        {/* Left Arrow */}
        <button 
          className="hidden sm:flex w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] lg:w-[48px] lg:h-[48px] bg-white rounded-full items-center justify-center cursor-pointer hover:scale-110 transition-transform flex-shrink-0"
          style={{
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(50px)'
          }}
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#055A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Testimonials Container */}
        <div className="w-full max-w-[702px] overflow-hidden">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              company={testimonial.company}
              role={testimonial.role}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
        
        {/* Right Arrow */}
        <button 
          className="hidden sm:flex w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] lg:w-[48px] lg:h-[48px] bg-white rounded-full items-center justify-center cursor-pointer hover:scale-110 transition-transform flex-shrink-0"
          style={{
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(50px)'
          }}
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#055A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
