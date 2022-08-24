import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Products = () => {
  const state = useSelector((state) => state.reducer);
  const { cart } = state.shopping;
  return (
    <div className="flex flex-col gap-y-6 border-black border-2 max-w-max max-h-96 overflow-auto">
      {cart && cart.map((item) => <img src={item.img} />)}
    </div>
  );
};

export default Products;
