import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import useStyles from "./styles";
import AddIcon from "@mui/icons-material/Add";
const Cart = ({ cart }) => {
  const isEmpty = !cart.line_items?.length;
  console.log(cart);
  const classes = useStyles();
  console.log(isEmpty);
  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        you have no items in your Shopping cart, start adding some!
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid Container className={classes.cardDetails}>
          {cart?.line_items?.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.image.url}
                  alt="Paella dish"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography variant="h6">
                    {item.price.formatted_with_symbol}
                  </Typography>
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
                      //   border: "2px solid red",
                      justifyContent: "space-around",
                    }}
                  >
                    <IconButton>
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="h6">{item.quantity}</Typography>
                    <IconButton>
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Button variant="contained" color="primary">
                    remove
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div>
          <Typography variant="h4" className={classes.cardDetails}>
            Subtotal:{cart.subtotal?.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
            >
              Empty Cart
            </Button>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Check Out
            </Button>
          </div>
        </div>
      </>
    );
  };
  return (
    <Container>
      <div className={classes.toolbar}>
        <Typography className={classes.title} variant="h3">
          Your Shopping Cart
        </Typography>
        {isEmpty ? <EmptyCart /> : <FilledCart />}
      </div>
    </Container>
  );
};

export default Cart;
