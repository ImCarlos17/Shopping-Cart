import "./App.css";
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Contact from "./page/Contact";
import Error404 from "./page/Error404";
import { Provider } from "react-redux";
import store from "./store";
import Portal from "./component/Portal";
import Cart from "./component/Cart";
import Modal from "./component/Modal";
import "../src/component/Modal.css";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Provider store={store}>
      <div className="h-full bg-withe-300">
        <Browser>
          <Header setVisible={setVisible} />
          <Routes>
            <Route path="/shopping-cart" element={<Home />} />
            <Route path="/shopping-cart/shop" element={<Shop />} />
            <Route path="/shopping-cart/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Browser>
        <Portal>
          <Modal
            visible={visible}
            onClose={() => setVisible((prevState) => !prevState)}
          >
            <Cart onClose={() => setVisible((prevState) => !prevState)} />
          </Modal>
        </Portal>
      </div>
    </Provider>
  );
};

export default App;
