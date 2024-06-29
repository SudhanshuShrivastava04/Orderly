import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="py-5 px-2 flex justify-between items-center w-full">
      <div className="text-4xl lg:text-6xl text-unbounded text-orange-500 lg:w-1/2">
        Orderly
      </div>
      <ul
        className="lg:gap-5 md:gap-4 text-orange-500 lg:text-xl w-full lg:w-1/4 items-center justify-center text-outfit  hidden lg:flex"
      >
        <li
          onClick={() => setMenu("home")}
          className={`cursor-pointer ${
            menu === "home"
              ? "pb-0.5 border-b-2 border-b-orange-500 text-orange-500"
              : "text-gray-400"
          }`}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={`cursor-pointer ${
            menu === "menu"
              ? "pb-0.5 border-b-2 border-b-orange-500 text-orange-500"
              : "text-gray-400"
          }`}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("contactUs")}
          className={`cursor-pointer ${
            menu === "contactUs"
              ? "pb-0.5 border-b-2 border-b-orange-500 text-orange-500"
              : "text-gray-400"
          }`}
        >
          Contact
        </li>
      </ul>
      <div className="flex items-center justify-end gap-4 lg:gap-10 text-outfit w-full lg:w-1/4">
        <IoIosSearch size={18} />
        <div className="relative">
          <SlBasket size={18} />
          <div className="absolute min-w-2.5 min-h-2.5 bg-orange-500 rounded-md -top-2 -right-2"></div>
        </div>
        <button onClick={() => setShowLogin(true)} className="bg-transparent lg:text-lg text-orange-500 border rounded-full border-orange-500 px-3 hover:bg-orange-500 hover:border-orange-500 hover:text-white duration-300 transition cursor-pointer">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
