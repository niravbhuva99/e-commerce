import React, { useEffect, useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import { commerce } from "./lib/commerce";
import Cart from "./Components/cart/Cart";
import Products from "./Components/products/Products";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Errorpage from "./error/Errorpage";
import Checkout from "./Components/checkoutForm/checkout/Checkout";
import Form from "./Components/Form";
// commerce instace do all of the backend stuff
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // fetchProducts from commerce.js
  // inside of all
  console.log("cart from app", cart);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    // retrieve cart from commerce.js
    setCart(await commerce.cart.retrieve());
  };

  const habdleAddToCart = async (productId, quantity) => {
    // adding item to cart
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  // update Cart
  const handleUpdateCartQty = async (productId, quantity) => {
    const cart = await commerce.cart.update(productId, { quantity });
    setCart(cart);
    console.log("from update", cart);
  };
  // removeCart
  const handleRemoveCartQty = async (productId, quantity) => {
    const cart = await commerce.cart.remove(productId, quantity);
    setCart(cart);
  };
  //emptyCart
  const handleEmptyCart = async (productId) => {
    const cart = await commerce.cart.empty(productId);
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      // <Root />
      element: <Form />,
      errorElement: <Errorpage />,
      // children: [
      //   {
      //     index: true,
      //     element: (
      //       <Products products={products} onAddToCart={habdleAddToCart} />
      //     ),
      //   },
      //   {
      //     path: "/cart",
      //     element: (
      //       <Cart
      //         cart={cart}
      //         handleEmptyCart={handleEmptyCart}
      //         handleRemoveCartQty={handleRemoveCartQty}
      //         handleUpdateCartQty={handleUpdateCartQty}
      //       />
      //     ),
      //   },
      //   { path: "/checkout", element: <Checkout /> },
      // ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
