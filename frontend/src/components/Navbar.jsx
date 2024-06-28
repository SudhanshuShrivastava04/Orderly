import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="py-5 px-2 flex justify-between items-center w-full">
      <div alt="" className="text-6xl text-unbounded text-orange-500 w-1/2">
        Orderly
      </div>
      <ul className="flex gap-5 text-orange-500 text-xl w-1/4 items-center justify-center text-outfit">
        <li
          onClick={() => setMenu("home")}
          className={
            menu == "home"
              ? "pb-0.5 border-b-2 border-b-orange-400 text-orange-400 cursor-pointer"
              : "cursor-pointer"
          }
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={
            menu == "menu"
              ? "pb-0.5 border-b-2 border-b-orange-400 text-orange-400 cursor-pointer"
              : "cursor-pointer"
          }
        >
          Menu
        </li>
      </ul>
      <div className="w-1/4 flex items-center justify-end gap-10 text-outfit">
        <IoIosSearch size={18} />
        <div className="relative">
          <SlBasket size={18} />
          <div className="absolute min-w-2.5 min-h-2.5 bg-orange-500 rounded-md -top-2 -right-2"></div>
        </div>

        <button className="bg-transparent text-lg text-orange-500 border rounded-full border-orange-500 px-3 hover:bg-orange-400 hover:border-orange-400 hover:text-white duration-300 transition cursor-pointer">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
