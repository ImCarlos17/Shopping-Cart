import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="text-4xl font-semibold text-green-600">
          Dog Clothes Store
        </h1>
      </Link>
      <NavBar />
    </div>
  );
};

export default Header;
