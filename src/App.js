import "./App.css";
import React from "react";
import Header from "./component/Header";
import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Contact from "./page/Contact";

const App = () => {
  return (
    <div className="App">
      <Browser>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Browser>
    </div>
  );
};

export default App;
