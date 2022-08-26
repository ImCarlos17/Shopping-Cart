import React from "react";
import { useSelector } from "react-redux";
import ButtonsCart from "./ButtonsCart";
import Products from "./Products";

const Cart = ({ onClose }) => {
  const state = useSelector((state) => state.reducer);
  const { cart } = state.shopping;

  let totalPrice = cart.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  return (
    <div className="cart content-cart border-black border-rounded flex flex-col w-10/12 h-96 py-8 px-8 justify-around items-center">
      <h1 className="text-4xl"> Shopping Cart</h1>
      <article>{<Products />}</article>
      <span className="font-semibold text-2xl">Total: ${totalPrice}.00 </span>
      <ButtonsCart onClose={onClose} />
    </div>
  );
};

export default Cart;
