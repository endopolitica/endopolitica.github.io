import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

interface PropositoBackgroundProps {
  className?: string;
}

export const PropositoBackground: React.FC<PropositoBackgroundProps> = ({ 
  className = ''
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  if (isMobile) {
    // CSS-based approach for mobile
    return (
      <Box
        className={className}
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#DD89FF",
          backgroundImage: 'url("/textura-proposito.svg")',
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#DD89FF",
            opacity: 0.2,
          }
        }}
      />
    );
  }
  
  // SVG approach for desktop
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