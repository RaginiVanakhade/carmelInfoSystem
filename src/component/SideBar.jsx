import React, { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const NAVBAR_HEIGHT = 64;
const DRAWER_WIDTH = 250;

const masterItems = [
  { label: "Company Master", path: "/master/companymaster" },
  { label: "Book Status Master", path: "/master/bookstatesmaster" },
  { label: "Customer Master", path: "/master/customermaster" },
  { label: "Vendor Master", path: "/master/vendormaster" },
  { label: "Service Product Master", path: "/master/serviceproductmaster" },
  { label: "Skills Category Master", path: "/master/skillscategorymaster" },
  { label: "Skill Master", path: "/master/skillmaster" },
  { label: "Country Master", path: "/master/countrymaster" },
  { label: "State Master", path: "/master/statemaster" },
];

const SideBar = ({ open }) => {
  const location = useLocation();
  const [mastersOpen, setMastersOpen] = useState(false);

  // 👉 Open Master menu automatically if route starts with /master
  useEffect(() => {
    if (location.pathname.startsWith("/master")) {
      setMastersOpen(true);
    }
  }, [location.pathname]);

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
        },
      }}
    >
      <Box>
        <List>

          {/* Dashboard */}
          <ListItemButton
            component={NavLink}
            to="/dashboard"
            sx={{
              "&.active": {
                backgroundColor: "#1976d2",
                color: "#fff",
              },
            }}
          >
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          {/* Master Parent */}
          <ListItemButton onClick={() => setMastersOpen(!mastersOpen)}>
            <ListItemText primary="Master" />
            {mastersOpen ? <RemoveIcon /> : <AddIcon />}
          </ListItemButton>

          {/* Master Submenu */}
          <Collapse in={mastersOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {masterItems.map((item) => (
                <ListItemButton
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    pl: 4,
                    "&.active": {
                      backgroundColor: "#1976d2",
                      color: "#fff",
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
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
