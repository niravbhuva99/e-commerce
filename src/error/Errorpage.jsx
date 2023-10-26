import { Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <Typography variant="h1" sx={{ mt: 9, width: "100%", m: "auto" }}>
      Something went Wrong👎 Please Go to{" "}
      <NavLink to="/">Products Page..</NavLink>
    </Typography>
  );
};

export default Errorpage;
