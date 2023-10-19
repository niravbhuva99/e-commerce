import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
const Navbar = ({ total_items }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            E-commerce
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton>
              <Badge badgeContent={total_items} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
