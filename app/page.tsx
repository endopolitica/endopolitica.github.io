"use client"

import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  Menu,
  MenuItem,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { 
  KeyboardArrowDown as KeyboardArrowDownIcon, 
  Phone as PhoneIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material"
import Image from "next/image"
import { Logo } from "./components/Logo"
import { ManifestoBackground } from "./components/ManifestoBackground"
import { PinkBackground } from "./components/PinkBackground"
import { PropositoBackground } from "./components/PropositoBackground"
import Footer from "./components/Footer"

// Custom styled components
const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  boxShadow: "none",
  color: "black",
  padding: "12px 0", // Add vertical padding to the entire AppBar
})

const NavLink = styled(Button)({
  color: "black",
  textTransform: "none",
  fontWeight: "normal",
  padding: "8px 16px",
  minWidth: "auto",
  "&:hover": {
    backgroundColor: "transparent",
    color: "gray",
  },
})

const HeroCard = styled(Card)({
  borderRadius: "12px",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
})

const PurpleHeroCard = styled(HeroCard)({
  backgroundColor: "#d580ff",
  backgroundImage: 'url("/retangulo1.svg")',
  backgroundSize: "cover",
  backgroundBlendMode: "multiply",
})

const LightPurpleCard = styled(HeroCard)({
  background: 'radial-gradient(circle, #e9b5ff 0%, #de90ff 100%)',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const SectionCard = styled(Card)({
  borderRadius: "12px",
  padding: "32px",
  marginBottom: "32px",
  position: "relative",
  overflow: "hidden",
})

const OrangeCard = styled(SectionCard)({
  backgroundColor: "#FFA000",
})

const PinkCard = styled(SectionCard)({
  backgroundColor: "#f284ab",
})

const PurpleCard = styled(SectionCard)({
  backgroundColor: "#DD89FF",
})

// Updated styled components for typography
const MonoTypography = styled(Typography)({
  fontFamily: "var(--font-space-grotesk), sans-serif",
  fontWeight: 300,
});

const NavTypography = styled(Typography)({
  fontFamily: "var(--font-space-grotesk), sans-serif",
  fontWeight: 700,
  fontSize: "1.2rem",
});

// New Section Heading component
const SectionHeading = styled(Typography)({
  fontWeight: "bold", 
  marginBottom: "1.5rem", 
  fontFamily: "var(--font-space-mono), monospace",
});

export default function Home() {
  const [languageMenu, setLanguageMenu] = React.useState<null | HTMLElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageMenu(event.currentTarget)
  }

  const handleCloseLanguageMenu = () => {
    setLanguageMenu(null)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Manifesto", href: "#manifesto" },
    { label: "O que fazemos", href: "#o-que-fazemos" },
    { label: "Propósito", href: "#proposito" },
    { label: "Apoio", href: "#apoio" },
    { label: "Contato", href: "#contato" },
  ]

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      {/* Navigation */}
      <StyledAppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
            {isMobile ? (
              <>
                {/* Mobile Layout */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Logo />
                </Box>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleMobileMenu}
                >
                  <MenuIcon />
                </IconButton>
                
                {/* Mobile Menu Drawer */}
                <Drawer
                  anchor="right"
                  open={mobileMenuOpen}
                  onClose={toggleMobileMenu}
                  PaperProps={{
                    sx: { 
                      width: "100%",
                      bgcolor: "white",
                      padding: 2,
                    }
                  }}
                >
                  <Box sx={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    p: 2,
                    mb: 2
                  }}>
                    <Logo />
                    <IconButton
                      color="inherit"
                      aria-label="close menu"
                      onClick={toggleMobileMenu}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <List>
                    {navItems.map((item) => (
                      <ListItem key={item.label} disablePadding>
                        <ListItemButton 
                          component="a" 
                          href={item.href}
                          onClick={toggleMobileMenu}
                          sx={{ py: 2 }}
                        >
                          <ListItemText 
                            primary={item.label} 
                            primaryTypographyProps={{ 
                              fontSize: "1.2rem", 
                              fontWeight: "medium" 
                            }} 
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                    <ListItem disablePadding>
                      <ListItemButton 
                        onClick={handleOpenLanguageMenu}
                        sx={{ py: 2 }}
                      >
                        <ListItemText 
                          primary="PT" 
                          primaryTypographyProps={{ 
                            fontSize: "1.2rem", 
                            fontWeight: "medium" 
                          }} 
                        />
                        <KeyboardArrowDownIcon />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Drawer>
              </>
            ) : (
              <>
                {/* Desktop Layout - Existing Code */}
                <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-start" }}>
                  <NavLink href="#"><NavTypography>Home</NavTypography></NavLink>
                  <NavLink href="#manifesto"><NavTypography>Manifesto</NavTypography></NavLink>
                  <NavLink href="#o-que-fazemos"><NavTypography>O que fazemos</NavTypography></NavLink>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "40px",
                    marginTop: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <Logo />
                </Box>

                <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                  <NavLink href="#proposito"><NavTypography>Propósito</NavTypography></NavLink>
                  <NavLink href="#apoio"><NavTypography>Apoio</NavTypography></NavLink>
                  <NavLink href="#contato"><NavTypography>Contato</NavTypography></NavLink>

                  <Box sx={{ ml: 2 }}>
                    <Button
                      onClick={handleOpenLanguageMenu}
                      endIcon={<KeyboardArrowDownIcon />}
                      sx={{ color: "black", textTransform: "none" }}
                    >
                      <NavTypography>PT</NavTypography>
                    </Button>
                  </Box>
                </Box>
              </>
            )}
            
            <Menu 
              anchorEl={languageMenu} 
              open={Boolean(languageMenu)} 
              onClose={handleCloseLanguageMenu}
            >
              <MenuItem onClick={handleCloseLanguageMenu}>PT</MenuItem>
              <MenuItem onClick={handleCloseLanguageMenu}>EN</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        {/* Hero Section */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <PurpleHeroCard>
              <CardContent sx={{ 
                zIndex: 1, 
                p: 4, 
                display: "flex", 
                flexDirection: "column", 
                height: "100%", 
                justifyContent: "center" 
              }}>
                <MonoTypography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 400, 
                    mb: 1,
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" } 
                  }}
                >
                  A nossa
                </MonoTypography>
                <MonoTypography 
                  variant="h2" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 1,
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                    lineHeight: 1.2
                  }}
                >
                  Endometriose
                </MonoTypography>
                <MonoTypography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 400, 
                    mb: 1,
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" } 
                  }}
                >
                  é política!
                </MonoTypography>
              </CardContent>
            </PurpleHeroCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <LightPurpleCard>
              <Image
                src="/hand-holding-uterus-cut.png"
                alt="Hand holding uterus illustration"
                width={300}
                height={300}
              />
            </LightPurpleCard>
          </Grid>
        </Grid>

        {/* Manifesto Section */}
        <Box id="manifesto" sx={{ my: 4 }}>
          <OrangeCard sx={{paddingBottom: "0px"}}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <SectionHeading
                  variant="h3"
                >
                  Manifesto
                </SectionHeading>
                <MonoTypography variant="body1" sx={{ mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                  in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                  at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi.
                </MonoTypography>
              </Grid>
              <Grid item xs={12} md={6} 
                    sx={{
                      position: "relative",
                      minHeight: 400,
                      padding: "0 !important", // Remove default padding
                    }}>
                <Box sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "100%",
                  width: "100%",
                }}>
                  <ManifestoBackground />
                </Box>
              </Grid>
            </Grid>
          </OrangeCard>
        </Box>

        {/* O que fazemos Section */}
        <Box id="o-que-fazemos" sx={{ my: 4 }}>
          <PinkCard sx={{paddingBottom: "0px"}}>
            <Grid container spacing={4}>
              <Grid 
                item 
                xs={12} 
                md={6} 
                sx={{ 
                  position: "relative",
                  minHeight: 400,
                  padding: "0 !important", // Remove default padding
                }}
              >
                <Box sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}>
                  <PinkBackground />
                </Box>
                <Box sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "80%", 
                  backgroundImage: 'url("/estetoscopio.png")',
                  backgroundSize: "contain",
                  backgroundPosition: "bottom left",
                  backgroundRepeat: "no-repeat",
                }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <SectionHeading
                  variant="h3"
                >
                  O que fazemos
                </SectionHeading>
                <MonoTypography variant="body1" sx={{ mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                  in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                  at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi.
                </MonoTypography>
              </Grid>
            </Grid>
          </PinkCard>
        </Box>

        {/* Propósito Section */}
        <Box id="proposito" sx={{ my: 4 }}>
          <PurpleCard sx={{paddingBottom: "0px", paddingRight: "0px"}}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <SectionHeading
                  variant="h3"
                >
                  Propósito
                </SectionHeading>
                <MonoTypography variant="body1" sx={{ mb: 2, mr: 2 }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                  in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                  at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi.
                </MonoTypography>
              </Grid>
              <Grid 
                item 
                xs={12} 
                md={6} 
                sx={{ 
                  position: "relative",
                  minHeight: 400,
                  padding: "0 !important", // Remove default padding
                }}
              >
                <Box sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}>
                  <PropositoBackground />
                </Box>
                <Box sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "100%", 
                  backgroundImage: 'url("/proposito.png")',
                  backgroundSize: "contain",
                  backgroundPosition: { 
                    xs: "bottom center",
                    md: "bottom right"
                  },
                  backgroundRepeat: "no-repeat",
                }} />
              </Grid>
            </Grid>
          </PurpleCard>
        </Box>

        {/* Contato Section */}
        <Box id="contato" sx={{ my: 4 }}>
          <OrangeCard sx={{paddingRight: "0px"}}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <SectionHeading
                  variant="h3"
                >
                  Contato
                </SectionHeading>
                <MonoTypography variant="body1" sx={{ mb: 2 }}>
                  Fale com a gente pelo e-mail:{" "}
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    contato@endopolitica.org
                  </Box>
                </MonoTypography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ position: "relative" }}>
                <Box 
                  sx={{
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
                    display: { xs: "none", md: "block" }
                  }} 
                />
              </Grid>
            </Grid>
          </OrangeCard>
        </Box>
      </Container>
      
      <Footer />
    </Box>
  )
}

