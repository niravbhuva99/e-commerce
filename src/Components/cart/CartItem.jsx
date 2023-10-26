import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import classes from "./styles.module.css";
const CartItem = ({ item, handleRemoveCartQty, handleUpdateCartQty }) => {
  console.log("run cartItems");
  return (
    <Card>
      <CardMedia
        component="img"
        image={item.image.url}
        alt={item.name}
        className={classes.image}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h6">{item.price.formatted_with_symbol}</Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "200px",
            justifyContent: "space-around",
          }}
        >
          <IconButton
            onClick={() => {
              console.log("hello");
              handleUpdateCartQty(item.id, item.quantity - 1);
            }}
          >
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6">{item.quantity}</Typography>
          <IconButton
            onClick={() => {
              console.log("hello");
              handleUpdateCartQty(item.id, item.quantity + 1);
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleRemoveCartQty(item.id);
          }}
        >
          remove
        </Button>
      </Box>
    </Card>
  );
};

export default CartItem;
