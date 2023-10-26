import Badge from "@mui/material/Badge";

import { Typography, Toolbar, IconButton, AppBar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./styles.module.css";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ total_items }) => {
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <NavLink to="/">
            <Typography variant="h6" className={classes.title}>
              E-commerce
            </Typography>
          </NavLink>
          <div className={classes.grow} />
          <div className={classes.button}>
            {location.pathname === "/" && (
              <NavLink to="/cart">
                <IconButton>
                  <Badge badgeContent={total_items} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </NavLink>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
