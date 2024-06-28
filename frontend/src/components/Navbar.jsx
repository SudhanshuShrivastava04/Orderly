import React from "react";
import { assets } from "../assets/assets";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className="py-5 px-2 flex justify-between items-center w-full">
      <div alt="" className="text-6xl text-unbounded text-orange-500 w-1/2">
        Orderly
      </div>
      <ul className="flex gap-5 text-orange-500 text-xl w-1/4 items-center justify-center text-outfit">
        <li>Home</li>
        <li>Menu</li>
      </ul>
      <div className="w-1/4 flex items-center justify-end gap-10 text-outfit">
        <IoIosSearch size={18} />
        <div className="navbar-search-icon">
          <SlBasket size={18} />
          <div className="dot"></div>
        </div>

        <button className="bg-transparent text-lg text-orange-500 border rounded-full border-orange-500 px-3 hover:bg-orange-400 hover:border-orange-400 hover:text-white duration-300 transition cursor-pointer">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
