import React, { useState } from 'react';
import {
  HeroSection,
  TechnologySection,
  ServicesSection,
  AIAdoptionSection,
  WhyChooseSection,
  TestimonialsSection,
  CTASection,
  Footer,
} from './components/sections';

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => setShowCursor(true);
  const handleMouseLeave = () => setShowCursor(false);

  return (
    <div 
      className="flex flex-col items-center w-full min-h-screen bg-white overflow-x-hidden custom-cursor-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showCursor && (
        <div className="custom-cursor" style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}>
          <div className="cursor-dot"></div>
        </div>
      )}
      <div className="w-full flex flex-col gap-[50px] sm:gap-[60px] md:gap-[80px] lg:gap-[100px] xl:gap-[119px]">
        <HeroSection />
        <TechnologySection />
        <ServicesSection />
        <AIAdoptionSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
      <style jsx>{`
        .custom-cursor-container { cursor: none; }
        .custom-cursor-container * { cursor: none !important; }
        .custom-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.05s ease-out;
        }
        .cursor-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(240, 87, 54, 1);
          border: 2px solid rgba(255, 255, 255, 1);
          box-shadow: 0 2px 10px rgba(240, 87, 54, 0.5);
        }
        @keyframes cursorPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 4px 20px rgba(240, 87, 54, 0.4); }
          50% { transform: scale(1.15); box-shadow: 0 4px 30px rgba(240, 87, 54, 0.6); }
        }
      `}</style>
    </div>
  );
};

export default App;
