import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleEmptyCart,
  handleRemoveCartQty,
  handleUpdateCartQty,
}) => {
  console.log("run cart ", cart);
  const isEmpty = !cart?.line_items?.length;

  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        you have no items in your Shopping cart, start adding some!
        <Link to="/"> Start Adding Some</Link>
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container className={classes.cardDetails} spacing={3}>
          {cart?.line_items?.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem
                item={item}
                handleRemoveCartQty={handleRemoveCartQty}
                handleUpdateCartQty={handleUpdateCartQty}
              />
            </Grid>
          ))}
        </Grid>
        <div>
          <Typography variant="h4" className={classes.totel}>
            Subtotal:{cart.subtotal?.formatted_with_symbol}
          </Typography>
          <Box
            sx={{
              mt: 2,
              width: 320,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => {
                console.log("empty");
                handleEmptyCart();
              }}
            >
              Empty Cart
            </Button>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
              component={Link}
              to="/checkout"
            >
              Check Out
            </Button>
          </Box>
        </div>
      </>
    );
  };
  return (
    <Box sx={{ mt: 9 }}>
      <div className={classes.toolbar}>
        <Typography className={classes.title} variant="h3">
          Your Shopping Cart
        </Typography>
        {isEmpty ? <EmptyCart /> : <FilledCart />}
      </div>
    </Box>
  );
};

export default Cart;
