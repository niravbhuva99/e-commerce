import React, { useEffect, useState } from "react";
import Products from "./Components/products/Products";
import Navbar from "./Components/navbar/Navbar";
import { commerce } from "./lib/commerce";
import { InsertEmoticon } from "@material-ui/icons";
import Cart from "./Components/cart/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const habdleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      {/* <Products products={products} onAddToCart={habdleAddToCart} /> */}
      <Navbar cartItems={cart} total_items={cart?.total_items} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
