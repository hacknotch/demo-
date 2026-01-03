import React from 'react';
import { TestimonialCard } from '../common';
import { TESTIMONIALS } from '../../constants';

const TestimonialsSection = () => {
  const testimonials = TESTIMONIALS;

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

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
      
      {/* Infinite Scrolling Slider */}
      <div className="relative overflow-hidden -mx-4 sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-32 px-4 sm:px-5 md:px-10 lg:px-20 xl:px-32">
        <div 
          className="flex gap-4 sm:gap-5 lg:gap-6 animate-scroll"
          style={{
            animation: 'scroll 35s linear infinite',
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px]">
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                company={testimonial.company}
                role={testimonial.role}
                avatar={testimonial.avatar}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      </div>
    </section>
  );
};

export default TestimonialsSection;
