import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-100 bg-dark px-5 py-2">
      <Link className="text-white px-3 py-2 " to="/">
        Home
      </Link>
      <Link className="text-white px-3 py-2 " to="/about">
        About Us
      </Link>
    </nav>
  );
};

export default Navbar;
