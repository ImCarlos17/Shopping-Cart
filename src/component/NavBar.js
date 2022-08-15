import React from "react";
import iconCartSvg from "../static/icons/cart.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <div className="flex  items-center">
            <Link
              to="/shopping-cart"
              className="text-xl text-yellow-700 hover:text-yellow-400"
            >
              Home
            </Link>
            <Link
              to="/shopping-cart/shop"
              className="text-xl text-yellow-700 hover:text-yellow-400"
            >
              Shop
            </Link>
            <Link
              to="/shopping-cart/contact"
              className="text-xl text-yellow-700 hover:text-yellow-400"
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="text-xl text-yellow-700 hover:text-yellow-400"
            >
              <div className="flex h-10 w-10 rounded-full bg-white content-center relative">
                <img src={iconCartSvg} />
                <span className="flex w-full justify-center items-center absolute pt-3 text-base text-black">
                  5
                </span>
              </div>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
