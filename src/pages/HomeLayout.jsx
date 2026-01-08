import { useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Navbar from "../component/Navbar";
import SideBar from "../component/SideBar";

const HomeLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <>
      <Navbar onMenuClick={() => setOpenDrawer((p) => !p)} />

      <SideBar open={openDrawer} />

      <Box
        sx={{
          mt: "60px",
          ml: openDrawer ? "250px" : 0,
          transition: "margin 0.3s ease",
          p: 3,
          minHeight: "calc(100vh - 64px)",
          bgcolor: "#eee",
          overflowY: "auto",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default HomeLayout;
