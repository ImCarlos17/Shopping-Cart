import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../component/Card";
import { addToCard, clearCart, delFromCart } from "../actions/shoppingActions";

const Shop = () => {
  const state = useSelector((state) => state.reducer);
  const { products, cart } = state.shopping;
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-3 grid-rows-4 px-2.5 py-12 gap-y-32">
      {products.map((product) => (
        <Card
          data={product}
          key={product.id}
          addToCart={() => dispatch(addToCard(product.id))}
        />
      ))}
    </div>
  );
};

export default Shop;
