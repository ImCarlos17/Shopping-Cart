import React from "react";

const ButtonsCart = () => {
  return (
    <div className="flex flex-col gap-2 w-10/12">
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Checkout
      </button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Close
      </button>
    </div>
  );
};

export default ButtonsCart;
