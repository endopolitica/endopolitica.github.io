import React from 'react';
import { Box, styled } from '@mui/material';
import Image from 'next/image';

// Custom styled components
const FooterContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "3rem 0",
});

const FooterText = styled('div')({
  fontFamily: "var(--font-space-mono), monospace",
  fontWeight: 400,
  fontSize: "24px",
  textAlign: "center",
  marginRight: "2rem",
  '@media (max-width: 600px)': {
    fontSize: "28px",
    marginRight: "1rem",
  },
});

const LogoContainer = styled(Box)({
  display: "flex", 
  justifyContent: "center",
  alignItems: "center",
});

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <FooterContainer className={className}>
      <FooterText>
        Somos apoiados por
      </FooterText>
      <LogoContainer>
        <Image
          src="/fap.png"
          alt="FAP logo"
          width={100}
          height={50}
          style={{ objectFit: "contain" }}
        />
      </LogoContainer>
    </FooterContainer>
  );
};

export default Footer; 