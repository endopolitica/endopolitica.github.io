import { Typography, styled } from "@mui/material";

// Typography components
export const MonoTypography = styled(Typography)({
  fontFamily: "var(--font-space-grotesk), sans-serif",
  fontWeight: 300,
});

export const NavTypography = styled(Typography)({
  fontFamily: "var(--font-space-grotesk), sans-serif",
  fontWeight: 700,
  fontSize: "1.2rem",
});

export const SectionHeading = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "1.5rem",
  fontFamily: "var(--font-space-mono), monospace",
}); 