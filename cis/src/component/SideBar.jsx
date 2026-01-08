import React from "react";
import {
  Box,
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const NAVBAR_HEIGHT = 64;

const SideBar = ({ open, setOpen }) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      ModalProps={{
        keepMounted: true,
      }}
      PaperProps={{
        sx: {
          top: NAVBAR_HEIGHT,
          height: `calc(100% - ${NAVBAR_HEIGHT}px)`,
        },
      }}
    >
      <Box sx={{ width: 250 }}>
        <List>
          <ListItemButton>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default SideBar;
