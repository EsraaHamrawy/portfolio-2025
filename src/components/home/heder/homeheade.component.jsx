import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./homeheder.module.css";
import AppLogo from "../../general/appLogo/appLogo.component";
import User from "../../general/user/user.component";

function Homeheade() {
  return (
    <AppBar position="static" className={styles.header}>
      <Container maxWidth="xl">
        <Toolbar>
          <AppLogo />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Open user menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <User />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Homeheade;
