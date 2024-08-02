import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="flex items-center shadow-xl justify-between px-10 h-[10vh]">
      <strong>Logo.</strong>
      <nav className="space-x-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/products">
          <button className="px-5 py-2 rounded-md bg-red-500 text-white">
            Products
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button className="px-5 py-2 rounded-md bg-blue-500 text-white">
            Signup
          </button>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
