import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, addToCart }) => {
  const { name, price, img, id } = data;
  return (
    <div>
      <div className="bg-white max-w-sm mx-auto rounded-lg shadow-xl">
        <div className="py-4 px-6 flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-gray-700">{name}</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            aliquam ligula.
          </p>
        </div>
        <div>
          <img src={img} alt="prueba" className="w-full object-cover" />
        </div>
        <div className="py-4 px-6 flex items-center justify-between bg-gray-800 rounded-bl-lg rounded-br-lg">
          <span className="text-white font-bold">${price}.00</span>
          <button
            onClick={() => addToCart(id)}
            className="text-gray-200 hover:text-white transition-colors font-semibold outline-none"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
