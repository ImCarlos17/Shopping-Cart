import "./App.css";
import React from "react";
import Header from "./component/Header";
import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Contact from "./page/Contact";
import Product from "./page/Product";
import Error404 from "./page/Error404";

const App = () => {
  return (
    <div className="h-full w-screen bg-withe-300">
      <Browser>
        <Header />
        <Routes>
          <Route path="/shopping-cart" element={<Home />} />
          <Route path="/shopping-cart/shop" element={<Shop />} />
          <Route path="/shopping-cart/contact" element={<Contact />} />
          <Route
            path="/shopping-cart/shop/product/:product"
            element={<Product />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Browser>
    </div>
  );
};

export default App;
