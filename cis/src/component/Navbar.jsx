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
import { MdKeyboardArrowDown } from "react-icons/md";

const NAVBAR_HEIGHT = 64;

const Navbar = ({ onMenuClick }) => {
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

        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <Avatar
            src="https://i.pravatar.cc/300"
            sx={{ width: 32, height: 32, mr: 1 }}
          />
          <Typography variant="body1">Carmel</Typography>
          <MdKeyboardArrowDown size={24} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
