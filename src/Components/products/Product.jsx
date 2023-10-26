import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  CardActionArea,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import classes from "./styles.module.css";
import { NavLink } from "react-router-dom";
const Product = ({ product, onAddToCart }) => {
  return (
    <Card className={classes.root} sx={{ position: "relative" }}>
      <CardActionArea>
        <NavLink to={`/detailspage/${product.name}`}>
          <CardMedia
            component="img"
            image={product.image.url}
            alt={product.name}
            className={classes.media}
          />
        </NavLink>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography
              sx={{
                typography: {
                  md: "h6",
                },
              }}
              gutterBottom
            >
              {product.name}
            </Typography>
            <Typography variant="h6">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>

          <Typography
            dangerouslySetInerHTML={{ _html: product.description }}
            variant="body2"
            color="textSecondary"
          />
        </CardContent>
      </CardActionArea>

      <CardActions
        disableSpacing
        className={classes.cardActions}
        onClick={() => {
          onAddToCart(product.id, 1);
        }}
        sx={{
          position: "absolute",
          bottom: 0,
          height: 50,
          width: "100%",
        }}
      >
        <IconButton
          aria-label="add to cart"
          sx={{ position: "absolute", bottom: 0, right: 25 }}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
