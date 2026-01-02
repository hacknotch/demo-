import React, { useState } from 'react';
import { Logo } from '../common';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home', active: true },
    { href: '#services', label: 'Services', active: false },
    { href: '#about', label: 'About Us', active: false },
    { href: '#contact', label: 'Contact Us', active: false },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex justify-between items-center pt-6 sm:pt-8 md:pt-10 lg:pt-[49px] pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 md:px-12 lg:px-24 relative z-50">
      {/* Logo - positioned at left */}
      <div 
        className="relative w-[100px] sm:w-[120px] md:w-[140px] lg:w-[151px] h-[32px] sm:h-[38px] md:h-[44px] lg:h-[48px] z-10"
        style={{ 
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))',
          backdropFilter: 'blur(2px)'
        }}
      >
        <Logo variant="light" />
      </div>

      {/* Navigation Links - Glass Effect Container */}
      <div 
        className={`
          fixed lg:relative top-0 left-0 right-0 bottom-0 
          lg:top-auto lg:left-auto lg:right-auto lg:bottom-auto lg:ml-8 xl:ml-12
          flex flex-col lg:flex-row justify-center lg:justify-start items-center 
          gap-5 lg:gap-0
          bg-[#081417]/98 lg:bg-transparent
          transform transition-transform duration-300
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Glass pill container - desktop only - Rectangle 1 */}
        <div 
          className="hidden lg:flex items-center w-auto lg:w-[360px] xl:w-[449px] h-[36px] lg:h-[38px] xl:h-[40px] rounded-[50px] px-1 justify-center"
          style={{
            border: '0.5px solid #FFFFFF',
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            backdropFilter: 'blur(66.8px)',
            background: 'transparent'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                font-medium text-[14px] lg:text-[16px] xl:text-[18px] leading-[1.4] lg:leading-[26px] py-1 lg:py-[5px] px-3 lg:px-4 xl:px-5
                transition-all duration-200 whitespace-nowrap
                ${link.active 
                  ? 'gradient-orange text-white rounded-[75px] text-[15px] lg:text-[18px] xl:text-[20px] leading-[1.4] xl:leading-[29px]' 
                  : 'text-white hover:opacity-80'
                }
              `}
              style={{
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
                backdropFilter: 'blur(2px)'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu items */}
        <div className="flex lg:hidden flex-col items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                font-medium text-xl py-3 px-8
                transition-all duration-200
                ${link.active 
                  ? 'gradient-orange text-white rounded-full' 
                  : 'text-white hover:opacity-80'
                }
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile nav links */}
        <div className="flex flex-col lg:hidden items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`
                font-medium text-[18px] leading-[26px] py-2 px-6
                transition-all duration-200
                ${link.active 
                  ? 'gradient-orange text-white rounded-[75px]' 
                  : 'text-white hover:opacity-80'
                }
              `}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2.5 z-50 lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span 
          className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span 
          className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        />
        <span 
          className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>
    </nav>
  );
};

export default Navigation;
