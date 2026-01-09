import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const NAVBAR_HEIGHT = 64;
const DRAWER_WIDTH = 250;

const menuItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Company Master", path: "/master/comapymaster" },
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
          {menuItems.map((item) => (
            <ListItemButton
              key={item.path}
              component={NavLink}
              to={item.path}
              sx={{
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
      </Box>
    </Drawer>
  );
};

export default SideBar;
