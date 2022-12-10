import React from "react";
import iconCartSvg from "../static/icons/cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = ({ setVisible }) => {
  const state = useSelector((state) => state.reducer);
  const { cart } = state.shopping;

  let totalProducts = cart.length
    ? cart.map((item) => item.quantity).reduce((a, b) => a + b)
    : cart.length;

  return (
    <div>
      <nav>
        <ul>
          <div className="flex  items-center">
            <Link
              to="/"
              className="text-xl text-yellow-700 hover:text-yellow-400">
              Home
            </Link>
            <Link
              to="/shopping-cart/shop"
              className="text-xl text-yellow-700 hover:text-yellow-400">
              Shop
            </Link>
            <Link
              to="/shopping-cart/contact"
              className="text-xl text-yellow-700 hover:text-yellow-400">
              Contact
            </Link>
            <div
              onClick={() => setVisible((prevState) => !prevState)}
              className="text-xl text-yellow-700 hover:text-yellow-400 cursor-pointer">
              <div className="flex h-10 w-10 rounded-full bg-white content-center relative">
                <img src={iconCartSvg} />
                <span className="flex w-full justify-center items-center absolute pt-3 text-base text-black">
                  {totalProducts}
                </span>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
