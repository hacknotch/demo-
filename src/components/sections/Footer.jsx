import React from 'react';
import { Logo } from '../common';
import { 
  LinkedInIcon, 
  TwitterIcon, 
  InstagramIcon, 
  FacebookIcon,
  EmailIcon,
  PhoneIcon 
} from '../icons';

const Footer = () => {
  const navigationLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#', label: 'Our Clients' },
    { href: '#contact', label: 'Contact Us' },
  ];

  const serviceLinks = [
    { href: '#', label: 'Managed IT and Infra Services' },
    { href: '#', label: 'Managed Security Services' },
    { href: '#', label: 'Professional Services' },
  ];

  const contactInfo = [
    { 
      icon: <EmailIcon />, 
      href: 'mailto:info-sales@elowenit.com', 
      label: 'info-sales@elowenit.com' 
    },
    { 
      icon: <PhoneIcon />, 
      href: 'tel:+919686189580', 
      label: '+91-9686189580' 
    },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
    { icon: <TwitterIcon />, href: '#', label: 'Twitter' },
    { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
    { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
  ];

  return (
    <footer 
      className="relative w-full h-auto lg:min-h-[570px] bg-cover bg-center overflow-hidden"
      style={{ 
        backgroundImage: "url('/hero-bg.jpg')" 
      }}
      id="contact"
    >
      {/* Gradient Overlay - matching Figma */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ 
          background: 'linear-gradient(270deg, rgba(63, 62, 62, 0.2) 0%, #000000 37.58%)' 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-10 sm:py-12 lg:py-[82px]">
        {/* Brand */}
        <div className="text-center sm:text-left lg:text-left sm:col-span-2 lg:col-span-1">
          <div 
            style={{ 
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))',
              backdropFilter: 'blur(2px)'
            }}
          >
            <Logo variant="light" />
          </div>
          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] lg:leading-[29px] text-white mt-6 sm:mt-8 max-w-[253px] mx-auto sm:mx-0 lg:mx-0">
            Dependable IT Managed Services, SOC Operations, Resource Outsourcing, and AI Adoption Advisory.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8 justify-center sm:justify-start lg:justify-start">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-[#F05736] hover:to-[#FBB12F] transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center sm:text-left lg:text-left lg:pl-8">
          <h4 className="font-medium text-[18px] sm:text-[20px] leading-[1.4] lg:leading-[29px] text-white mb-4 sm:mb-6 lg:mb-[54px]">Navigation</h4>
          <ul className="space-y-2 sm:space-y-3">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] lg:leading-[29px] text-white hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}    
          </ul>
        </div>

        {/* Services */}
        <div className="text-center sm:text-left lg:text-left">
          <h4 className="font-medium text-[18px] sm:text-[20px] leading-[1.4] lg:leading-[29px] text-white mb-4 sm:mb-6 lg:mb-[54px]">Services</h4>
          <ul className="space-y-2 sm:space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] lg:leading-[29px] text-white hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left lg:text-left sm:col-span-2 lg:col-span-1">
          <h4 className="font-medium text-[18px] sm:text-[20px] leading-[1.4] lg:leading-[29px] text-white mb-4 sm:mb-6 lg:mb-[54px]">Contact Us</h4>
          <ul className="space-y-2 sm:space-y-3">
            {contactInfo.map((info) => (
              <li 
                key={info.label}
                className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start lg:justify-start"
              >
                {info.icon}
                <a 
                  href={info.href} 
                  className="font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] lg:leading-[29px] text-white hover:opacity-80 transition-opacity"
                >
                  {info.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
