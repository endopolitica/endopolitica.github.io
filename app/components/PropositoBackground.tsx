import React from 'react';

interface PropositoBackgroundProps {
  className?: string;
}

export const PropositoBackground: React.FC<PropositoBackgroundProps> = ({ 
  className = ''
}) => {
  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 600 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      {/* Base purple background */}
      <path d="M0 0H600V400H0V0Z" fill="#DD89FF" />
      
      {/* Load the SVG texture directly */}
      <image 
        href="/textura-proposito.svg" 
        x="0" 
        y="0" 
        width="100%" 
        height="100%" 
        preserveAspectRatio="xMidYMid slice"
      />
      
      {/* Optional overlay for better texture visibility */}
      <rect width="600" height="400" fill="#DD89FF" fillOpacity="0.2" />
    </svg>
  );
}; 