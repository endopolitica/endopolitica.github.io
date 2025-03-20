import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  styled,
} from "@mui/material";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { Logo } from "./Logo";
import { NavTypography } from "./Typography";
import { useLanguage } from "../i18n/LanguageContext";
import { scrollToSection } from "../utils/scrollToSection";

// Styled components
const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  boxShadow: "none",
  color: "black",
  padding: "12px 0",
});

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
});

const LogoContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  marginTop: "8px",
  marginBottom: "8px",
});

const MobileMenuHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  marginBottom: "16px",
});

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { language, t, changeLanguage } = useLanguage();
  const [languageMenu, setLanguageMenu] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageMenu(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setLanguageMenu(null);
  };

  const handleChangeLanguage = (lang: string) => {
    changeLanguage(lang);
    handleCloseLanguageMenu();
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (href: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    if (href.startsWith('#')) {
      const id = href.substring(1);
      scrollToSection(id);
      if (mobileMenuOpen) {
        toggleMobileMenu();
      }
    } else {
      window.location.href = href;
    }
  };

  const navItems = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.manifesto, href: "#manifesto" },
    { label: t.nav.whatWeDo, href: "#o-que-fazemos" },
    { label: t.nav.purpose, href: "#proposito" },
    { label: t.nav.support, href: "#apoio" },
    { label: t.nav.contact, href: "#contato" },
  ];

  return (
    <StyledAppBar position="static" className={className}>
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
                  },
                }}
              >
                <MobileMenuHeader>
                  <Logo />
                  <IconButton
                    color="inherit"
                    aria-label="close menu"
                    onClick={toggleMobileMenu}
                  >
                    <CloseIcon />
                  </IconButton>
                </MobileMenuHeader>
                <List>
                  {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton
                        component="a"
                        href={item.href}
                        onClick={handleNavClick(item.href)}
                        sx={{ py: 2 }}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontSize: "1.2rem",
                            fontWeight: "medium",
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
                        primary={language.toUpperCase()}
                        primaryTypographyProps={{
                          fontSize: "1.2rem",
                          fontWeight: "medium",
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
              {/* Desktop Layout */}
              <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-start" }}>
                <NavLink href="#" onClick={handleNavClick("#")}>
                  <NavTypography>{t.nav.home}</NavTypography>
                </NavLink>
                <NavLink href="#manifesto" onClick={handleNavClick("#manifesto")}>
                  <NavTypography>{t.nav.manifesto}</NavTypography>
                </NavLink>
                <NavLink href="#o-que-fazemos" onClick={handleNavClick("#o-que-fazemos")}>
                  <NavTypography>{t.nav.whatWeDo}</NavTypography>
                </NavLink>
              </Box>

              <LogoContainer>
                <Logo />
              </LogoContainer>

              <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                <NavLink href="#proposito" onClick={handleNavClick("#proposito")}>
                  <NavTypography>{t.nav.purpose}</NavTypography>
                </NavLink>
                <NavLink href="#apoio" onClick={handleNavClick("#apoio")}>
                  <NavTypography>{t.nav.support}</NavTypography>
                </NavLink>
                <NavLink href="#contato" onClick={handleNavClick("#contato")}>
                  <NavTypography>{t.nav.contact}</NavTypography>
                </NavLink>

                <Box sx={{ ml: 2 }}>
                  <Button
                    onClick={handleOpenLanguageMenu}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{ color: "black", textTransform: "none" }}
                  >
                    <NavTypography>{language.toUpperCase()}</NavTypography>
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
            <MenuItem onClick={() => handleChangeLanguage('pt')}>PT</MenuItem>
            <MenuItem onClick={() => handleChangeLanguage('en')}>EN</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar; 