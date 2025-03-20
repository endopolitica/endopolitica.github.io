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
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext"

// Main container styling
const PageContainer = styled(Box)({
  backgroundColor: "#ffffff",
});

const MainContainer = styled(Container)({
  marginTop: "2rem",
});

// Inner component that can use the language context
const PageContent = () => {
  const { t } = useLanguage();

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
          title={t.manifesto.title}
          content={t.manifesto.content}
          backgroundColor="orange"
          background={<ManifestoBackground />}
          backgroundImage="/manifesto.png"
          backgroundImageHeight="90%"
          backgroundPosition={{ 
            xs: "bottom center",
            md: "bottom center"
          }}
          margin="0 0 0 2rem"
        />

        {/* O que fazemos Section */}
        <ContentSection 
          id="o-que-fazemos"
          title={t.whatWeDo.title}
          content={t.whatWeDo.content}
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
          title={t.purpose.title}
          content={t.purpose.content}
          backgroundColor="purple"
          background={<PropositoBackground />}
          backgroundImage="/proposito.png"
          backgroundImageHeight="100%"
          backgroundPosition={{
            md: "right",
            lg: "top right"
          }}
        />

        {/* Contato Section */}
        <ContactSection />
        {/* Footer */}
        <Footer />
      </MainContainer>
    </PageContainer>
  );
};

// Main export wraps everything with the language provider
export default function Home() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}

