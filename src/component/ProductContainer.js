import React from "react";
const ProductContainer = ({ product, addToCart, delFromCart }) => {
  const { name, price, img, quantity, id } = product;

  return (
    <div className="flex w-36 h-36 gap-6">
      <img src={img} />

      <div className="flex flex-col items-center grid-rows-3 grid-cols-1 w-36 h-36 gap-6">
        <h1>{name}</h1>
        <span>${price * quantity}.00</span>
        <div className="flex gap-2 ">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={() => addToCart(id)}
          >
            +
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => delFromCart(id)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
