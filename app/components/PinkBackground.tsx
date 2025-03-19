import React from 'react';

interface PinkBackgroundProps {
  className?: string;
}

export const PinkBackground: React.FC<PinkBackgroundProps> = ({ 
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
      {/* Base pink background */}
      <path d="M0 0H600V400H0V0Z" fill="#f284ab" />
      
      {/* Load the SVG texture directly */}
      <image 
        href="/textura-pinkcard.svg" 
        x="0" 
        y="0" 
        width="100%" 
        height="100%" 
        preserveAspectRatio="xMidYMid slice"
      />
      
      {/* Optional overlay for better texture visibility */}
      <rect width="600" height="400" fill="#f284ab" fillOpacity="0.2" />
    </svg>
  );
}; 