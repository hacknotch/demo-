import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  onClick,
  ...props 
}) => {
  const baseStyles = "font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 text-center";
  
  const variants = {
    primary: "gradient-orange text-white rounded-[9px]",
    secondary: "bg-white text-gray-900 rounded-[9px]",
    outline: "border-2 border-white text-white hover:bg-white/10 rounded-[9px]",
  };
  
  const sizes = {
    small: "py-2 px-4 sm:px-6 text-sm h-[44px] sm:h-[50px]",
    medium: "py-2 sm:py-3 px-6 sm:px-10 text-base sm:text-lg h-[50px] sm:h-[60px]",
    large: "py-[3.75px] px-8 sm:px-12 md:px-[67.5px] text-[16px] sm:text-[20px] md:text-[24px] leading-[1.4] lg:leading-[35px] h-[50px] sm:h-[60px] md:h-[71px] min-w-[160px] sm:min-w-[200px] md:min-w-[248px]",
  };

  const buttonStyle = {
    boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(1.5px)',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      style={buttonStyle}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
