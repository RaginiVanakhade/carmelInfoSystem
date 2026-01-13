import React, { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { AiOutlineHome } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import CustomeSearch from "./custom/CustomeSearch"

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
          marginTop: "20px",
        },
      }}
    >
      <Box alignItems="center">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Avatar
            src="https://i.pravatar.cc/300"
            sx={{ width: 36, height: 36 }}
          />
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography sx={{ mx: 1, fontSize: 16, fontWeight: 500 }}>
            Carmel
          </Typography>

          <FaChevronDown />
        </Box>
      </Box>


      <Box>
         <CustomeSearch />
      </Box>

      <Box>
        <List>
          <Typography
            fontSize="16px"
            fontWeight={100}
            margin="12px"
            color="#1976d2"
          >
            Navigation
          </Typography>
          {/* Dashboard */}
          <ListItemButton
            component={NavLink}
            to="/dashboard"
            sx={{
              "&.active": {
                backgroundColor: "#1976d2",
                color: "#fff",
                margin: "8px",
              },
            }}
            color="text-muted"
          >
            <div className="m-2px">
              <AiOutlineHome />
            </div>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          {/* Master Parent */}
          <ListItemButton onClick={() => setMastersOpen(!mastersOpen)}>
            <ListItemText
              primary="Masters"
              slotProps={{
                primary: {
                  sx: {
                    color: "#1976d2",
                  },
                },
              }}
            />
            {mastersOpen ? <RemoveIcon /> : <AddIcon />}
          </ListItemButton>

          {/* Master Submenu */}
          <Collapse in={mastersOpen} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                ml: 4,
                borderLeft: "1px solid #cfcfcf",
                
              }}
            >
              {masterItems.map((item) => (
                <ListItemButton
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    pl: 2,
                    position: "relative",

                    /* DOT */
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: -4,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: "#9e9e9e",
                      transition: "all 0.2s ease",
                    },

                    /* TEXT */
                    color: "#555",
                    transition: "all 0.2s ease",

                    /* HOVER */
                    "&:hover": {
                      color: "#1976d2",
                      backgroundColor: "transparent",

                      "&::before": {
                        backgroundColor: "#1976d2",
                      },
                    },

                    /* ACTIVE */
                    "&.active": {
                      color: "#1976d2",
                      fontWeight: 600,

                      "&::before": {
                        backgroundColor: "#1976d2",
                      },
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
