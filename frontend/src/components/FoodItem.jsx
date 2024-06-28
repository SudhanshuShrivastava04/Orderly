import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { MdAdd } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);
  return (
    <div className="w-full m-auto rounded-2xl shadow-lg transition duration-300 animate-fadeIn">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="w-full rounded-t-2xl rounded-r-2xl"
        />
        {!cartItems[id] ? (
          <MdAdd
            className="w-9 h-9 bg-white absolute bottom-4 right-4 cursor-pointer rounded-full p-2"
            onClick={() => addToCart(id)}
            size={18}
          />
        ) : (
          <div className="flex items-center gap-2 text-xl absolute bottom-4 right-4 px-1.5 rounded-full bg-white">
            <IoMdRemoveCircle
              onClick={() => removeFromCart(id)}
              size={18}
              className="text-red-500"
            />
            <p>{cartItems[id]}</p>
            <IoIosAddCircle
              onClick={() => addToCart(id)}
              className="text-green-500"
              size={18}
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-xl font-medium my-2">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-16" />
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
        <p className="text-orange-500 text-lg font-medium">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
