import React from "react";
import Navbar from "../Components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Root = () => {
  return (
    <Box>
      <Navbar />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Root;
