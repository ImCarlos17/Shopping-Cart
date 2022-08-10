import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Super Store</h1>
      </Link>
      <NavBar />
    </div>
  );
};

export default Header;
