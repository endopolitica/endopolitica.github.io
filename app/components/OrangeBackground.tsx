import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

interface OrangeBackgroundProps {
  className?: string;
}

export const OrangeBackground: React.FC<OrangeBackgroundProps> = ({ 
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
          backgroundColor: "#FFA000",
          backgroundImage: 'url("/textura-manifesto.svg")',
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
            backgroundColor: "#FFA000",
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
      {/* Base orange background */}
      <path d="M0 0H600V400H0V0Z" fill="#FFA000" />
      
      {/* Load the SVG texture directly */}
      <image 
        href="/textura-manifesto.svg" 
        x="0" 
        y="0" 
        width="100%" 
        height="100%" 
        preserveAspectRatio="xMidYMid slice"
      />
      
      {/* Optional overlay for better texture visibility */}
      <rect width="600" height="400" fill="#FFA000" fillOpacity="0.2" />
    </svg>
  );
}; 