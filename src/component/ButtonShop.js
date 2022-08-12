import React from "react";
import { Link } from "react-router-dom";

const ButtonShop = () => {
  return (
    <div className="flex justify-center">
      <Link to="/shop">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-36">
          Shop Page
        </button>
      </Link>
    </div>
  );
};

export default ButtonShop;
