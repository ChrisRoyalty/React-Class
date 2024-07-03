import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
function MyHeader() {
  const [toggleNav, setToggleNav] = useState("hidden");
  const handleMenu = () => {
    toggleNav === "hidden" ? setToggleNav("grid") : setToggleNav("hidden");
  };
  return (
    <div className="fixed flex justify-center items-center w-full h-[12vh] bg-red-400 text-white">
      <div className="w-[80%] flex justify-between items-center">
        <strong className="logo border-[1px] border-dotted sm:p-2 p-1 shadow-md">
          ChrisLearn.
        </strong>
        <nav
          className={`fixed z-10 ${toggleNav} sm:static top-[12vh] sm:h-fit h-[60%] sm:w-fit w-full left-0 sm:flex grid sm:gap-8 sm:bg-transparent bg-gray-400 sm:p-0 pl-[10%] py-6`}
        >
          <a
            href=""
            className="max-sm:hover:text-red-400 max-sm:hover:text-[20px] max-sm:hover:p-2"
          >
            Home
          </a>
          <a
            href=""
            className="max-sm:hover:text-red-400 max-sm:hover:text-[20px] max-sm:hover:p-2"
          >
            About
          </a>
          <a
            href=""
            className="max-sm:hover:text-red-400 max-sm:hover:text-[20px] max-sm:hover:p-2"
          >
            Contact
          </a>
          <a
            href=""
            className="max-sm:hover:text-red-400 max-sm:hover:text-[20px] max-sm:hover:p-2"
          >
            Gallery
          </a>
          <a
            href=""
            className="max-sm:hover:text-red-400 max-sm:hover:text-[20px] max-sm:hover:p-2"
          >
            Blog
          </a>
        </nav>
        <button
          className="border-[1px] border-gray-200 py-1 px-2 hover:opacity-70 cursor-pointer text-[22px] shadow-md sm:hidden"
          onClick={handleMenu}
        >
          <CiMenuFries />
        </button>
      </div>
    </div>
  );
}

export default MyHeader;
