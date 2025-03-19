import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';


// Custom styled Typography for the footer text
const FooterText = styled(Typography)({
  fontFamily: "var(--font-space-mono), monospace",
  fontWeight: 400,
  fontSize: "28px",
  textAlign: "center",
  marginBottom: "1rem",
});

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FooterText sx={{padding: "1rem 2rem 1rem 0"}}>
        Somos apoiados por
      </FooterText>
      <Box sx={{ 
        display: "flex", 
        justifyContent: "center",
        mb: 2
      }}>
        <Image
          src="/fap.png"
          alt="FAP logo"
          width={100}
          height={50}
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
};

export default Footer; 