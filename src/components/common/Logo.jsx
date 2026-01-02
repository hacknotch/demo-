import React from 'react';

const Logo = ({ variant = 'light', className = '' }) => (
  <img 
    src="/logo.png" 
    alt="Elowen IT Solutions" 
    className={`h-[48px] lg:h-[52px] w-auto object-contain ${className}`}
    style={{
      filter: variant === 'light' ? 'brightness(1)' : 'none',
      maxWidth: '165px'
    }}
  />
);

export default Logo;
