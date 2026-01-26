import React, { useState } from "react";
import { Avatar, Menu, MenuItem, IconButton, Box, Typography } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function CustomeUserMenu({ avatarSrc, avatarAlt, displayName, menuItems = [] }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={handleOpen}
      >
        <Avatar src={avatarSrc} alt={avatarAlt} sx={{ width: 32, height: 32, mr: 1 }} />
        <Typography variant="body1">{displayName}</Typography>
        <MdKeyboardArrowDown size={24} />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              handleClose();
              item.onClick?.();
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
