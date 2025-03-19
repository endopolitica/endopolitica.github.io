import React from "react";
import { Grid, CardContent, styled } from "@mui/material";
import Image from "next/image";
import { MonoTypography } from "./Typography";

// Styled components
const HeroCard = styled('div')({
  borderRadius: "12px",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
});

const PurpleHeroCard = styled(HeroCard)({
  backgroundColor: "#d580ff",
  backgroundImage: 'url("/retangulo1.svg")',
  backgroundSize: "cover",
  backgroundBlendMode: "multiply",
});

const LightPurpleCard = styled(HeroCard)({
  background: 'radial-gradient(circle, #e9b5ff 0%, #de90ff 100%)',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const HeroContent = styled(CardContent)({
  zIndex: 1,
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
});

const HeroTitle = styled(MonoTypography)({
  fontWeight: 700,
  marginBottom: "0.5rem",
  lineHeight: 1.2,
  fontSize: "3.5rem",
  '@media (max-width: 960px)': {
    fontSize: "3rem",
  },
  '@media (max-width: 600px)': {
    fontSize: "2.5rem",
  },
});

const HeroSubtitle = styled(MonoTypography)({
  fontWeight: 400,
  marginBottom: "0.5rem",
  fontSize: "2rem",
  '@media (max-width: 960px)': {
    fontSize: "1.8rem",
  },
  '@media (max-width: 600px)': {
    fontSize: "1.5rem",
  },
});

const HeroSection: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <PurpleHeroCard>
          <HeroContent>
            <HeroSubtitle variant="h4">A nossa</HeroSubtitle>
            <HeroTitle variant="h2">Endometriose</HeroTitle>
            <HeroSubtitle variant="h4">é política!</HeroSubtitle>
          </HeroContent>
        </PurpleHeroCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <LightPurpleCard>
          <Image
            src="/hand-holding-uterus-cut.png"
            alt="Hand holding uterus illustration"
            width={300}
            height={200}
          />
        </LightPurpleCard>
      </Grid>
    </Grid>
  );
};

export default HeroSection; 