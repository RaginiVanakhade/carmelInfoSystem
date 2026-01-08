import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const NAVBAR_HEIGHT = 64;
const DRAWER_WIDTH = 250;

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
          <ListItemButton>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
