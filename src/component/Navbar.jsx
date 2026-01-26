import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CustomeUserMenu from "./custom/CustomeUserMenu";
import { FiSettings, FiUser, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const NAVBAR_HEIGHT = 64;

const Navbar = ({ onMenuClick }) => {

    const navigate = useNavigate();
  const handleLogout = () => {
 
    localStorage.removeItem("token");

    navigate("/");
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#4c8bf5",
        height: NAVBAR_HEIGHT,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ minHeight: NAVBAR_HEIGHT }}>
        {/* Left */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            component="img"
            src="https://mui.com/static/logo.png"
            alt="logo"
            sx={{ height: 32 }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Material Able
          </Typography>
          <IconButton color="inherit" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Right */}
        <IconButton color="inherit">
          <Badge badgeContent={1} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* User Menu */}
        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <CustomeUserMenu
            avatarSrc="https://i.pravatar.cc/300"
            avatarAlt="Carmel"
            displayName="Carmel"
            menuItems={[
              { label: "Profile", icon: <FiUser /> },
              { label: "Logout", icon: <FiLogOut />, onClick: handleLogout },
            ]}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
