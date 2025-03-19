import React from "react";
import { Box, Grid, styled, Link } from "@mui/material";
import { SectionHeading, MonoTypography } from "./Typography";
import { useLanguage } from "../i18n/LanguageContext";

// Styled components
const SectionCard = styled('div')({
  borderRadius: "12px",
  padding: "32px",
  marginBottom: "32px",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#FFA000",
  paddingRight: "0px"
});

const EmailText = styled(Link)({
  fontWeight: "bold",
  display: "inline",
  color: "inherit",
  textDecoration: "underline",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
    opacity: 0.9,
  },
});

const ContactImage = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: "100%",
  width: "100%",
  backgroundImage: 'url("/contato.png")',
  backgroundSize: "contain",
  backgroundPosition: "bottom right",
  backgroundRepeat: "no-repeat",
});

const ContactSection: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useLanguage();
  
  return (
    <Box id="contato" sx={{ my: 4 }} className={className}>
      <SectionCard>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <SectionHeading variant="h3">{t.contact.title}</SectionHeading>
            <MonoTypography variant="body1" sx={{ mb: 2 }}>
              {t.contact.intro}{" "}
              <EmailText href="mailto:contato@endopolitica.org">
                {t.contact.email}
              </EmailText>
            </MonoTypography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <ContactImage sx={{ display: { xs: "none", md: "block" } }} />
          </Grid>
        </Grid>
      </SectionCard>
    </Box>
  );
};

export default ContactSection; 