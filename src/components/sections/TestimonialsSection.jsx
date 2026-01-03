import React, { useRef, useState } from 'react';
import { TestimonialCard } from '../common';
import { TESTIMONIALS } from '../../constants';

const TestimonialsSection = () => {
  const testimonials = TESTIMONIALS;
  const scrollContainerRef = useRef(null);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pauseTimeoutRef = useRef(null);

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      setIsAutoScrollPaused(true);
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      
      // Resume auto-scroll after 5 seconds
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = setTimeout(() => {
        setIsAutoScrollPaused(false);
      }, 5000);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      setIsAutoScrollPaused(true);
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      
      // Resume auto-scroll after 5 seconds
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = setTimeout(() => {
        setIsAutoScrollPaused(false);
      }, 5000);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
      
      {/* Scroll Buttons */}
      <div className="flex justify-center gap-3 mb-6 sm:mb-8">
        <button
          onClick={scrollLeft}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label="Scroll left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label="Scroll right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {/* Infinite Scrolling Slider */}
      <div className="relative">
        <div 
          ref={scrollContainerRef} 
          className="overflow-x-auto overflow-y-hidden -mx-4 sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-32 px-4 sm:px-5 md:px-10 lg:px-20 xl:px-32 scrollbar-hide"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className={`flex gap-4 sm:gap-5 lg:gap-6 ${!isAutoScrollPaused && !isHovered ? 'animate-scroll' : ''}`}
            style={{
              animation: !isAutoScrollPaused && !isHovered ? 'scroll 35s linear infinite' : 'none',
              willChange: 'transform',
            }}
          >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] snap-start">
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
          will-change: transform;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
        }
      `}</style>
      </div>
    </section>
  );
};

export default TestimonialsSection;
