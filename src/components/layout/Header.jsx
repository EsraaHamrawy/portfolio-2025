import React, { useState } from "react"; 
import { AppBar, Box, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Tooltip, Button } from "@mui/material"; 
import { FaBars, FaHome, FaInfoCircle, FaProjectDiagram, FaChartBar, FaAward, FaEnvelope, FaCode, FaTimes, FaSun, FaMoon } from "react-icons/fa"; 
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; 
import { RiTwitterXFill } from "react-icons/ri"; 

// Navigation items with section IDs
const navItems = [
  { text: "About", icon: <FaInfoCircle />, id: "home" },
  { text: "Skills", icon: <FaCode />, id: "skills" },
  { text: "Experiences", icon: <FaChartBar />, id: "experiences" },
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

  // Toggle drawer
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  // Toggle dark/light mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Apply styles to element with id "allmain"
    const allMainElement = document.getElementById('allmain');
    
    if (allMainElement) {
      if (newDarkMode) {
        // Dark mode
        allMainElement.style.background = "transparent";
        allMainElement.style.color = "white";
      } else {
        // Light mode
        allMainElement.style.background = "rgb(231 217 251) ";
        allMainElement.style.color = "#333";
      }
    }

    // Apply styles to body for full page background
    document.body.style.background = newDarkMode ? "#000" : "rgb(231 217 251)";
    document.body.style.color = newDarkMode ? "white" : "#333";
    document.body.style.transition = "all 0.3s ease";

    // Update header background based on mode
    const headerElement = document.querySelector('.MuiAppBar-root');
    if (headerElement) {
      headerElement.style.background = newDarkMode ? "transparent" : "rgba(255, 255, 255, 0.8)";
      headerElement.style.color = newDarkMode ? "white" : "#333";
    }
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
      background: darkMode ? "black" : "rgba(255, 255, 255, 0.95)", 
      color: darkMode ? "white" : "#333",
      height: "100vh",
      transition: "all 0.3s ease"
    }}>
      {/* Drawer Header */}
      <Box sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        p: 3, 
        borderBottom: `1px solid ${darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}` 
      }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.4rem", color: darkMode ? "white" : "#333" }}>
          Portfolio
        </Typography>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <FaTimes />
        </IconButton>
      </Box>

      {/* Navigation List */}
      <List sx={{ py: 3 }}>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => handleNavClick(item.id)}
              sx={{ 
                mx: 2, 
                borderRadius: "12px",
                py: 1.5,
                "&:hover": { 
                  backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                  transform: "translateX(8px)", 
                  transition: "all 0.3s ease" 
                }
              }}
            >
              <ListItemIcon sx={{ color: darkMode ? "white" : "#333", minWidth: "45px", fontSize: "1.2rem" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  "& .MuiTypography-root": { 
                    fontWeight: "600", 
                    fontSize: "1.1rem",
                    color: darkMode ? "white" : "#333"
                  } 
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Theme Toggle in Drawer */}
      <Box sx={{ p: 2, borderBottom: `1px solid ${darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}` }}>
        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between",
          px: 2
        }}>
          <Typography sx={{ 
            fontWeight: "600", 
            fontSize: "1.1rem",
            color: darkMode ? "white" : "#333"
          }}>
            {darkMode ? "Dark Mode" : "Light Mode"}
          </Typography>
          <ToggleSwitch darkMode={darkMode} onToggle={toggleDarkMode} />
        </Box>
      </Box>

      {/* Social Media Icons */}
      <Box sx={{ 
        position: "absolute", 
        bottom: 0, 
        left: 0, 
        right: 0, 
        display: "flex", 
        justifyContent: "center", 
        gap: 2, 
        py: 3, 
        borderTop: `1px solid ${darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}`,
        backgroundColor: darkMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.2)"
      }}>
        <IconButton 
          color="inherit" 
          component="a" 
          href="https://www.linkedin.com/in/premnath-m/" 
          target="_blank"
          sx={{ 
            fontSize: "1.3rem",
            "&:hover": { 
              backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              transform: "scale(1.1)" 
            } 
          }}
        >
          <FaLinkedin />
        </IconButton>
        <IconButton 
          color="inherit" 
          component="a" 
          href="https://github.com/M-Premnath" 
          target="_blank"
          sx={{ 
            fontSize: "1.3rem",
            "&:hover": { 
              backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              transform: "scale(1.1)" 
            } 
          }}
        >
          <FaGithub />
        </IconButton>
        <IconButton 
          color="inherit" 
          component="a" 
          href="https://x.com/Premnath_T_M" 
          target="_blank"
          sx={{ 
            fontSize: "1.3rem",
            "&:hover": { 
              backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              transform: "scale(1.1)" 
            } 
          }}
        >
          <RiTwitterXFill />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar 
        component="nav" 
        sx={{ 
          background: darkMode ? "transparent" : "rgba(255, 255, 255, 0.8)",
          color: darkMode ? "#fff" : "#333",
          boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
          backdropFilter: "blur(10px)",
          borderBottom: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          py: 1
        }}
        className={darkMode ? "dark-mode-header" : "light-mode-header"}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
          {/* Mobile Menu Icon */}
          <IconButton 
            color="inherit" 
            aria-label="open drawer" 
            edge="start" 
            onClick={handleDrawerToggle}
            sx={{ 
              display: { md: "none" },
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
                  color:  "white",
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
            boxShadow: "4px 0 20px rgba(0,0,0,0.2)",
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