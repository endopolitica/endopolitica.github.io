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
  backgroundColor: "#E8B6FC",
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

const MonoTypography = styled(Typography)({
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
                  <NavLink href="#">Home</NavLink>
                  <NavLink href="#manifesto">Manifesto</NavLink>
                  <NavLink href="#o-que-fazemos">O que fazemos</NavLink>
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
                  <NavLink href="#proposito">Propósito</NavLink>
                  <NavLink href="#apoio">Apoio</NavLink>
                  <NavLink href="#contato">Contato</NavLink>

                  <Box sx={{ ml: 2 }}>
                    <Button
                      onClick={handleOpenLanguageMenu}
                      endIcon={<KeyboardArrowDownIcon />}
                      sx={{ color: "black", textTransform: "none" }}
                    >
                      PT
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
              <CardContent sx={{ zIndex: 1, p: 4 }}>
                {/* Replace MonoTypography with regular Typography with fontFamily style */}
                <MonoTypography variant="h4"  sx={{ fontWeight: 400, mb: 1 }}>
                  A nossa
                </MonoTypography>
                <MonoTypography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                  Endometriose
                </MonoTypography>
                <MonoTypography variant="h4"  sx={{ fontWeight: 400, mb: 1 }}>
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
          <OrangeCard>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                {/* Replace MonoTypography with regular Typography with fontFamily style */}
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ fontWeight: "bold", mb: 3, fontFamily: '"Space Mono", monospace' }}
                >
                  Manifesto
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                  in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                  at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} 
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      backgroundImage: 'url("/diagonal_orange_background.svg")', // ✅ Add background image
                      backgroundSize: "cover", // ✅ Ensure it covers the area
                      backgroundPosition: "center", // ✅ Center the background
                      backgroundRepeat: "repeat", // ✅ Prevent repetition
                      minHeight: 400, // ✅ Adjust height to ensure visibility
                    }}>
                {/* <Image
                  src="/hand-gesture.svg"
                  alt="Hand gesture on orange background"
                  width={400}
                  height={900}
                /> */}
              </Grid>
            </Grid>
          </OrangeCard>
        </Box>

        {/* O que fazemos Section */}
        <Box id="o-que-fazemos" sx={{ my: 4 }}>
          <PinkCard>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Hand with stethoscope and uterus"
                  width={300}
                  height={300}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Replace MonoTypography with regular Typography with fontFamily style */}
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ fontWeight: "bold", mb: 3, fontFamily: '"Space Mono", monospace' }}
                >
                  O que fazemos
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                  in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                  at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi.
                </Typography>
              </Grid>
            </Grid>
          </PinkCard>
        </Box>

        {/* Propósito Section */}
        <Box id="proposito" sx={{ my: 4 }}>
          <PurpleCard>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                {/* Replace MonoTypography with regular Typography with fontFamily style */}
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ fontWeight: "bold", mb: 3, fontFamily: '"Space Mono", monospace' }}
                >
                  Propósito
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                  in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                  at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Hands holding flower shapes"
                  width={300}
                  height={300}
                />
              </Grid>
            </Grid>
          </PurpleCard>
        </Box>

        {/* Contato Section */}
        <Box id="contato" sx={{ my: 4 }}>
          <OrangeCard>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                {/* Replace MonoTypography with regular Typography with fontFamily style */}
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ fontWeight: "bold", mb: 3, fontFamily: '"Space Mono", monospace' }}
                >
                  Contato
                </Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Fale com a gente pelo e-mail:{" "}
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    contato@endopolitica.org
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <PhoneIcon sx={{ fontSize: 120, color: "#ff0000" }} />
              </Grid>
            </Grid>
          </OrangeCard>
        </Box>
      </Container>
    </Box>
  )
}

