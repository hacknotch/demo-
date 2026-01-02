import React from 'react';
import { TestimonialCard } from '../common';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "With Elowen's resource outsourcing model, we reduced hiring costs and onboarded trained talent in record time. Their people are dependable, proactive, and always deliver.",
      name: 'P MOHANTY',
      company: 'INTELLIROOT',
      role: 'Quality Engineering',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    },
    {
      id: 2,
      quote: "Elowen transformed our IT infrastructure completely. Their managed security services gave us peace of mind and their team was always available 24/7 for any issues.",
      name: 'SARAH JOHNSON',
      company: 'TECHWAVE',
      role: 'CTO',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    },
    {
      id: 3,
      quote: "The AI adoption consulting from Elowen helped us automate 60% of our processes. Their expertise in integrating AI solutions is unmatched in the industry.",
      name: 'MICHAEL CHEN',
      company: 'DATAFLOW INC',
      role: 'Operations Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    },
    {
      id: 4,
      quote: "Professional, reliable, and innovative. Elowen's team delivered our cloud migration project ahead of schedule and under budget. Highly recommended!",
      name: 'EMILY WATSON',
      company: 'CLOUDNINE',
      role: 'VP Engineering',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    },
    {
      id: 5,
      quote: "Working with Elowen has been a game-changer for our cybersecurity posture. Their proactive approach to threat detection saved us from multiple potential breaches.",
      name: 'DAVID MILLER',
      company: 'SECURETECH',
      role: 'CISO',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    },
    {
      id: 6,
      quote: "Elowen's professional services team helped us scale our operations seamlessly. Their strategic guidance and technical expertise are truly world-class.",
      name: 'ANNA RODRIGUEZ',
      company: 'GROWTHLAB',
      role: 'CEO',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100',
    },
  ];

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
