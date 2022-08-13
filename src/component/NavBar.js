import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <div>
            <Link
              to="/"
              className="text-xl text-yellow-700 hover:text-yellow-400"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-xl text-yellow-700 hover:text-yellow-400"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-xl text-yellow-700 hover:text-yellow-400"
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="text-xl text-yellow-700 hover:text-yellow-400"
            >
              Cart
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
