import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import ProductContainer from "./ProductContainer";
import { addToCard, delFromCart } from "../actions/shoppingActions";

const Products = () => {
  const state = useSelector((state) => state.reducer);
  const { cart } = state.shopping;
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-y-6 border-black border-2 w-96 max-h-96 overflow-auto">
      {cart &&
        cart.map((item) => (
          <ProductContainer
            product={item}
            key={item.id}
            addToCart={() => dispatch(addToCard(item.id))}
            delFromCart={() => dispatch(delFromCart(item.id))}
          />
        ))}
    </div>
  );
};

export default Products;
