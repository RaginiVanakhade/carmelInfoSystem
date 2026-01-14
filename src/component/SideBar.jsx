import React, { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
  Avatar,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { AiOutlineHome } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { PiSquaresFourFill } from "react-icons/pi";
import CustomeSearch from "./custom/CustomeSearch";
import { masterItems } from "../listingData/SideBarItem";

const NAVBAR_HEIGHT = 64;
const DRAWER_WIDTH = 250;

/* ---------- Shared Styles ---------- */
const navItemStyle = {
  mx: 1,
  borderRadius: "6px",
  color: "#555",
  "&.active": {
    backgroundColor: "#1976d2",
    color: "#fff",
  },
};

const subItemStyle = {
  pl: 2,
  position: "relative",
  color: "#555",

  /* Dot (hidden by default) */
  "&::before": {
    content: '""',
    position: "absolute",
    left: -5,
    top: "50%",
    transform: "translateY(-50%)",
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "#1976d2",
    opacity: 0,
    transition: "opacity 0.2s ease",
  },

  /* Hover effect */
  "&:hover": {
    color: "#1976d2",
    backgroundColor: "transparent",
    "&::before": {
      opacity: 1,
    },
  },

  /* Active (clicked / current route) */
  "&.active": {
    color: "#1976d2",
    fontWeight: 600,
    "&::before": {
      opacity: 1,
    },
  },
};


const SideBar = ({ open }) => {
  const location = useLocation();
  const [mastersOpen, setMastersOpen] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith("/master")) {
      setMastersOpen(true);
    }
  }, [location.pathname]);

  const toggleMasters = () => setMastersOpen((prev) => !prev);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          top: NAVBAR_HEIGHT,
          height: `calc(100% - ${NAVBAR_HEIGHT}px)`,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        },
      }}
    >
      {/* ---------- HEADER ---------- */}
      <Box
        sx={{
          height: 100,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1503264116251-35a269479413")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          p: 2,
          flexShrink: 0,
        }}
      >
        <Box display="flex" justifyContent="center">
          <Avatar src="https://i.pravatar.cc/300" sx={{ width: 36, height: 36 }} />
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center" mt={1}>
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#fff", mr: 0.5 }}>
            Carmel
          </Typography>
          <FaChevronDown color="#fff" />
        </Box>
      </Box>

      {/* ---------- SEARCH ---------- */}
      <Box sx={{ p: 1, flexShrink: 0, borderBottom: "1px solid #ccc" , margin:2 }}>
        <CustomeSearch />
      </Box>

      {/* ---------- MENU ---------- */}
      <Box sx={{ flexGrow: 1, overflowY: "scroll" }}>
        <List>
          <Typography sx={{ fontSize: 13, fontWeight: 500, pl: 2, color: "#1976d2" }}>
            Navigation
          </Typography>

          <ListItemButton
            component={NavLink}
            to="/dashboard"
            sx={navItemStyle}
          >
            <AiOutlineHome size={18} />
            <ListItemText
              primary="Dashboard"
              slotProps={{ primary: { sx: { fontSize: 14, ml: 1 } } }}
            />
          </ListItemButton>

          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 500,
              pl: 2,
              mt: 2,
              color: "#1976d2",
            }}
          >
            Menu
          </Typography>

          <ListItemButton onClick={toggleMasters} sx={navItemStyle}>
            <PiSquaresFourFill size={18} />
            <ListItemText
              primary="Masters"
              slotProps={{ primary: { sx: { fontSize: 14, ml: 1 } } }}
            />
            {mastersOpen ? (
              <RemoveIcon sx={{ fontSize: 16 }} />
            ) : (
              <AddIcon sx={{ fontSize: 16 }} />
            )}
          </ListItemButton>

          <Collapse in={mastersOpen} timeout="auto" unmountOnExit>
            <List sx={{ ml: 3, borderLeft: "1px solid #cfcfcf" }}>
              {masterItems.map(({ path, label }) => (
                <ListItemButton
                  key={path}
                  component={NavLink}
                  to={path}
                  sx={subItemStyle}
                >
                  <ListItemText
                    primary={label}
                    slotProps={{ primary: { sx: { fontSize: 14 } } }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
