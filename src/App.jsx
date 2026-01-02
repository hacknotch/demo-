import React from 'react';
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
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white overflow-x-hidden">
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
    </div>
  );
};

export default App;
