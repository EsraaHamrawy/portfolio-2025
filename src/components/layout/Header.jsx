import React, { useEffect, useState } from "react"; 
import { AppBar, Box, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Tooltip, Button } from "@mui/material"; 
import { FaBars, FaHome, FaInfoCircle, FaProjectDiagram, FaChartBar, FaAward, FaEnvelope, FaCode, FaTimes, FaSun, FaMoon } from "react-icons/fa"; 
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; 
import { RiTwitterXFill } from "react-icons/ri"; 
import Footer from "./footer/footer";

// Navigation items with section IDs
const navItems = [
  { text: "About", icon: <FaInfoCircle />, id: "home" },
  { text: "Skills", icon: <FaCode />, id: "skills" },
  { text: "Experience", icon: <FaChartBar />, id: "experiences" },
  { text: "Certifications", icon: <FaChartBar />, id: "Certifications" },
  { text: "Projects", icon: <FaProjectDiagram />, id: "projects" },
  { text: "Contact", icon: <FaEnvelope />, id: "Contact" },
];

// Toggle Switch Component
const ToggleSwitch = ({ darkMode, onToggle }) => {
  return (
    <div>
      <label htmlFor="switch" className="toggle">
        <input 
          type="checkbox" 
          className="input" 
          id="switch" 
          checked={!darkMode}
          onChange={onToggle}
        />
        <div className="icon icon--moon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        <div className="icon icon--sun">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path
              d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
            ></path>
          </svg>
        </div>
      </label>
    </div>
  );
};

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const applyTheme = (isDarkMode) => {
    const allMainElement = document.getElementById("allmain");

    if (allMainElement) {
      if (isDarkMode) {
        allMainElement.style.background = "transparent";
        allMainElement.style.color = "white";
      } else {
        allMainElement.style.background = "rgb(231 217 251)";
        allMainElement.style.color = "#333";
      }
    }

    document.body.dataset.theme = isDarkMode ? "dark" : "light";
    document.body.style.background = isDarkMode ? "#000" : "rgb(231 217 251)";
    document.body.style.color = isDarkMode ? "white" : "#333";
    document.body.style.transition = "all 0.3s ease";

    const headerElement = document.querySelector(".MuiAppBar-root");
    if (headerElement) {
      headerElement.style.background = "transparent";
      headerElement.style.color = "white";
    }
  };

  useEffect(() => {
    applyTheme(darkMode);
  }, [darkMode]);

  // Toggle drawer
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Scroll to section and close drawer
  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  // Drawer content
  const drawer = (
    <Box sx={{ 
      width: 280, 
      textAlign: "center", 
      background: "rgba(132, 60, 188, 0.15)",
      boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 3px, rgba(138, 43, 226, 0.3) 0px 0px 3px",
      color: darkMode ? "white" : "#333",
      height: "100vh",
      transition: "all 0.3s ease",
      backdropFilter: "blur(12px)"
    }}>
      {/* Drawer Header */}
      <Box sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        p: 3, 
        borderBottom: "1px solid rgba(255,255,255,0.2)" 
      }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.4rem", color: "white" }}>
          Portfolio
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{color:"#741bc7"}}>
          <FaTimes />
        </IconButton>
      </Box>

      {/* Navigation List */}
      <List sx={{ py: 3 }}>
        {navItems.filter((item) => item.text !== "Contact").map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => handleNavClick(item.id)}
              sx={{ 
                mx: 2, 
                borderRadius: "12px",
                py: 1.5,
                "&:hover": { 
                  backgroundColor: "rgba(255,255,255,0.1)",
                  transform: "translateX(8px)", 
                  transition: "all 0.3s ease" 
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 6,
                  left: "50%",
                  width: "0",
                  height: "1px",
                  background: "linear-gradient(135deg,rgb(162, 108, 255) 0%, #764ba2 100%)",
                  transition: "all 0.3s ease",
                  transform: "translateX(-50%)"
                },
                "&:hover::after": {
                  width: "85%"
                }
              }}
            >
              <ListItemIcon sx={{ color: "white", minWidth: "45px", fontSize: "1.2rem" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  "& .MuiTypography-root": { 
                    fontWeight: "600", 
                    fontSize: "1.1rem",
                    color: "white"
                  } 
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Footer of side bare*/}
      <Footer />
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar 
        component="nav" 
        sx={{ 
          background: "transparent",
          color: "#fff",
          boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          transition: "all 0.3s ease",
          py: 1
        }}
        className="dark-mode-header"
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
          {/* Mobile Menu Icon */}
          <IconButton 
            color="#a200ff" 
            aria-label="open drawer" 
            edge="start" 
            onClick={handleDrawerToggle}
            sx={{ 
              display: { md: "none" },
              color: "var(--color-primary)",
              "&:hover": { 
                backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(255, 255, 255, 0.1)" 
              } 
            }}
          >
            <FaBars />
          </IconButton>

          {/* Desktop Navigation - Center */}
          <Box sx={{ 
            display: { xs: "none", md: "flex" }, 
            gap: 1,
            mx: "auto"
          }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                onClick={() => handleNavClick(item.id)}
                sx={{ 
                  color:  "#a200ff",
                  fontWeight: "500",
                  fontSize: "0.95rem",
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  textTransform: "none",
                  minWidth: "auto",
                  position: "relative",
                  "&:hover": { 
                    backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0,0,0,0.05)",
                    transform: "translateY(-1px)",
                    transition: "all 0.3s ease"
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 2,
                    left: "50%",
                    width: "0",
                    height: "1px",
                    background:"linear-gradient(135deg,rgb(162, 108, 255) 0%, #764ba2 100%)" ,
                    transition: "all 0.3s ease",
                    transform: "translateX(-50%)"
                  },
                  "&:hover::after": {
                    width: "90%",
                    borderRedus:"8px",
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Theme Toggle Switch - Right Side */}
          <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} arrow>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ToggleSwitch darkMode={darkMode} onToggle={toggleDarkMode} />
            </Box>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* Sidebar Navigation for Mobile */}
      <Drawer 
        anchor="left" 
        variant="temporary" 
        open={mobileOpen} 
        onClose={handleDrawerToggle}
        sx={{ 
          "& .MuiDrawer-paper": { 
            width: 280, 
            background: "rgba(132, 60, 188, 0.15)",
            boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 3px, rgba(138, 43, 226, 0.3) 0px 0px 3px",
            backdropFilter: "blur(12px)",
            transition: "all 0.3s ease"
          } 
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar />
    </Box>
  );
}

export default Header;
