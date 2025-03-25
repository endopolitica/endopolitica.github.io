import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

interface PinkBackgroundProps {
  className?: string;
}

export const PinkBackground: React.FC<PinkBackgroundProps> = ({ 
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
          backgroundColor: "#f284ab",
          backgroundImage: 'url("/textura-pinkcard.svg")',
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          padding: "0px",
          display: "flex",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#f284ab",
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