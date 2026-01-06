import React, { useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "../component/Navbar";
import SideBar from "../component/SideBar";

const NAVBAR_HEIGHT = 64;

const Home = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <>
      <Navbar onMenuClick={() => setOpenDrawer(true)} />
      <SideBar open={openDrawer} setOpen={setOpenDrawer} />

      {/* Page content */}
      <Box
        sx={{
          mt: `${NAVBAR_HEIGHT}px`,
          p: 2,
        }}
      >
        <h1>hello</h1>
      </Box>
    </>
  );
};

export default Home;
