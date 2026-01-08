import { useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Navbar from "../component/Navbar";
import SideBar from "../component/SideBar";

const NAVBAR_HEIGHT = 64;
const SIDEBAR_WIDTH = 250;

const HomeLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <>
      <Navbar onMenuClick={() => setOpenDrawer((p) => !p)} />

      <SideBar open={openDrawer} />

      {/* Content Area */}
      <Box
        sx={{
          mt: `${NAVBAR_HEIGHT}px`,
          ml: openDrawer ? `${SIDEBAR_WIDTH}px` : 0,
          transition: "margin 0.3s ease",
          p: 3,
          minHeight: "calc(100vh - 64px)",
          bgcolor: "#eee",
        }}
      >
        <Outlet /> {/* 👈 only this changes */}
      </Box>
    </>
  );
};

export default HomeLayout;
