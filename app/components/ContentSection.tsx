import React, { ReactNode } from "react";
import { Box, Grid, styled } from "@mui/material";
import { SectionHeading, MonoTypography } from "./Typography";

// Styled components
const SectionCard = styled('div')({
  borderRadius: "12px",
  padding: "32px",
  marginBottom: "32px",
  position: "relative",
  overflow: "hidden",
});

const OrangeCard = styled(SectionCard)(({ theme }) => ({
  backgroundColor: "#FFA000",
}));

const PinkCard = styled(SectionCard)(({ theme }) => ({
  backgroundColor: "#f284ab",
}));

const PurpleCard = styled(SectionCard)(({ theme }) => ({
  backgroundColor: "#DD89FF",
  paddingRight: "0px",
}));

const TextContainer = styled(Grid)(({ theme }) => ({
  paddingRight: "1rem",
}));

const ImageContainer = styled(Grid)(({ theme }) => ({
  position: "relative",
  minHeight: 400,
  padding: "0 !important",
}));

const BackgroundWrapper = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: "100%",
  width: "100%",
});

const BackgroundImage = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  
  // Add default responsive heights
  height: "100%",
  [theme.breakpoints.down('md')]: {
    height: "80%", // Default height for mobile devices
  },
}));

interface ContentSectionProps {
  id: string;
  title: string;
  content: string;
  background?: ReactNode;
  backgroundImage?: string;
  backgroundImageHeight?: string;
  backgroundPosition?: string | { [key: string]: string };
  backgroundDisplay?: { [key: string]: string };
  margin?: string;
  backgroundColor: "orange" | "pink" | "purple";
  imageFirst?: boolean;
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  id,
  title,
  content,
  background,
  backgroundImage,
  backgroundImageHeight,
  backgroundPosition = "bottom right",
  backgroundDisplay,
  backgroundColor,
  margin,
  imageFirst = false,
  className,
}) => {
  let CardComponent;
  switch (backgroundColor) {
    case "orange":
      CardComponent = OrangeCard;
      break;
    case "pink":
      CardComponent = PinkCard;
      break;
    case "purple":
      CardComponent = PurpleCard;
      break;
    default:
      CardComponent = SectionCard;
  }

  const cardProps = {
    className: className,
    style: { paddingBottom: backgroundImage ? "0px" : undefined },
  };

  const textContent = (
    <TextContainer item xs={12} md={6}>
      <SectionHeading variant="h3">{title}</SectionHeading>
      <MonoTypography variant="body1" sx={{ mb: 2 }}>
        {content}
      </MonoTypography>
    </TextContainer>
  );

  const imageContent = backgroundImage || background ? (
    <ImageContainer item xs={12} md={6}>
      <BackgroundWrapper sx={{margin: margin}}>
        {background}
      </BackgroundWrapper>
      {backgroundImage && (
        <BackgroundImage
          sx={{
            backgroundImage: `url("${backgroundImage}")`,
            height: backgroundImageHeight || "100%",
            backgroundPosition: backgroundPosition,
            ...(backgroundDisplay && { display: backgroundDisplay }),
          }}
        />
      )}
    </ImageContainer>
  ) : null;

  return (
    <Box id={id} sx={{ my: 4 }}>
      <CardComponent {...cardProps}>
        <Grid container spacing={4}>
          {imageFirst ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </Grid>
      </CardComponent>
    </Box>
  );
};

export default ContentSection; 