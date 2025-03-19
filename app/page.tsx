"use client"

import React from "react"
import { Box, Container, styled } from "@mui/material"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import ContentSection from "./components/ContentSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import { ManifestoBackground } from "./components/ManifestoBackground"
import { PinkBackground } from "./components/PinkBackground"
import { PropositoBackground } from "./components/PropositoBackground"

// Main container styling
const PageContainer = styled(Box)({
  backgroundColor: "#ffffff",
});

const MainContainer = styled(Container)({
  marginTop: "2rem",
});

export default function Home() {
  return (
    <PageContainer>
      {/* Navigation */}
      <Navbar />

      <MainContainer maxWidth="xl">
        {/* Hero Section */}
        <HeroSection />

        {/* Manifesto Section */}
        <ContentSection 
          id="manifesto"
          title="Manifesto"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
          in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
          at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
          duis dolore te feugait nulla facilisi."
          backgroundColor="orange"
          background={<ManifestoBackground />}
          backgroundImage="/manifesto.png"
          backgroundImageHeight="90%"
          backgroundPosition={{ 
            xs: "bottom center",
            md: "bottom center"
          }}
          margin="0 0 0 7rem"
        />

        {/* O que fazemos Section */}
        <ContentSection 
          id="o-que-fazemos"
          title="O que fazemos"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
          in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
          at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
          duis dolore te feugait nulla facilisi."
          backgroundColor="pink"
          background={<PinkBackground />}
          backgroundImage="/estetoscopio.png"
          backgroundImageHeight="90%"
          backgroundPosition={{ 
            xs: "bottom center",
            md: "bottom left"
          }}
          imageFirst={true}
        />

        {/* Propósito Section */}
        <ContentSection 
          id="proposito"
          title="Propósito"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
          in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
          at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
          duis dolore te feugait nulla facilisi."
          backgroundColor="purple"
          background={<PropositoBackground />}
          backgroundImage="/proposito.png"
          backgroundImageHeight="100%"
          backgroundPosition={{ 
            xs: "bottom center",
            md: "top right"
          }}
        />

        {/* Contato Section */}
        <ContactSection />
      </MainContainer>
      
      {/* Footer */}
      <Footer />
    </PageContainer>
  )
}

