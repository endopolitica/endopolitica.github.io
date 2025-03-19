import React from 'react';

interface OrangeBackgroundProps {
  className?: string;
}

export const OrangeBackground: React.FC<OrangeBackgroundProps> = ({ 
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
      {/* Base orange background */}
      <path d="M0 0H600V400H0V0Z" fill="#FFA000" />
      
      {/* Diagonal overlay patterns */}
      <path d="M600 0L0 400V0H600Z" fill="#FFB733" opacity="0.5" />
      <path d="M600 0L300 400H600V0Z" fill="#FF8500" opacity="0.3" />
      
      {/* Add repeating texture patterns */}
      <rect width="600" height="400" fill="url(#diagonal-lines)" fillOpacity="0.15" />
      <rect width="600" height="400" fill="url(#dots-pattern)" fillOpacity="0.05" />
      
      {/* Define patterns */}
      <defs>
        {/* Diagonal lines pattern */}
        <pattern id="diagonal-lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M-5,5 L15,25" stroke="#FFFFFF" strokeWidth="0.5" />
          <path d="M-15,-5 L5,15" stroke="#FFFFFF" strokeWidth="0.5" />
        </pattern>
        
        {/* Dots pattern */}
        <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1.5" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="1" fill="#FFFFFF" />
          <circle cx="0" cy="20" r="1" fill="#FFFFFF" />
          <circle cx="20" cy="0" r="1" fill="#FFFFFF" />
          <circle cx="20" cy="20" r="1" fill="#FFFFFF" />
        </pattern>
      </defs>
    </svg>
  );
}; 