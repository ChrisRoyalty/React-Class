import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import React from "react";
function Header() {
  const [toggleNav, setToggleNav] = useState("hidden");
  // const [state, useState] = useState(initial state);
  const handleNav = () => {
    toggleNav === "hidden" ? setToggleNav("grid") : setToggleNav("hidden");
  };
  return (
    <header className="flex justify-between items-center px-10 h-[10vh] shadow-md bg-slate-200">
      <strong>Logo.</strong>

      <nav
        className={`z-10 fixed ${toggleNav} top-[10vh] sm:static grid bg-slate-200 sm:bg-transparent left-0 w-1/2 sm:w-fit h-screen sm:h-fit content-start sm:flex items-center gap-10 pt-10 pl-10 sm:p-0 `}
      >
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Gallery</a>
        <a href="">Blog</a>
      </nav>

      <button
        className="text-4xl border-[1px] border-gray-400 px-1 sm:hidden"
        onClick={handleNav}
      >
        <CiMenuFries />
      </button>
    </header>
  );
}

export default Header;
