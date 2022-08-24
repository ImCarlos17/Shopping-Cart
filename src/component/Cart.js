import React from "react";
import { useSelector } from "react-redux";
import ButtonsCart from "./ButtonsCart";

const Cart = () => {
  const state = useSelector((state) => state.reducer);
  const { cart } = state.shopping;
  let totalPrices = cart.length
    ? cart
        .map((item) => item)
        .reduce((total, item) => console.log(item.quantity))
    : "There are no products in the shopping cart";
  console.log(totalPrices.quantity);
  return (
    <div className="cart content-cart border-black border-rounded border-2 flex flex-col w-10/12 h-96 py-8 px-8 justify-around items-center">
      <h1 className="text-4xl"> Shopping Cart</h1>
      <article>{}</article>
      <span className="font-semibold text-2xl">Total: </span>
      <ButtonsCart />
    </div>
  );
};

export default Cart;
