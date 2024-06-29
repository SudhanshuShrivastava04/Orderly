import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  return (
    <div className="mt-12 font-outfit">
      <div className="w-full">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-400 md:text-lg lg:text-xl text-sm">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        <div className="w-full max-h-[50vh] overflow-y-scroll">
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div className="">
                  <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center lg:text-xl text-sm md:text-lg my-2.5 mx-0 text-black">
                    <img src={item.image} alt="" className="w-20 rounded-md" />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹{item.price * cartItems[item._id]}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="cursor-pointer"
                    >
                      X
                    </p>
                  </div>
                  <hr className="h-0.5 text-gray-400" />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="mt-20 flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-10">
        <div className="flex-1 flex flex-col gap-5">
          <h2>Cart Total</h2>
          <div>
            <div className="flex justify-between text-gray-400">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr className="my-2.5 mx-0" />
            <div className="flex justify-between text-gray-400">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() > 0 ? `₹200` : `₹0`}</p>
            </div>
            <hr className="my-2.5 mx-0" />
            <div className="flex justify-between text-gray-400">
              <b>Total</b>
              <b>
                {getTotalCartAmount() > 0
                  ? `₹ ${getTotalCartAmount() + 200}`
                  : `₹0`}
              </b>
            </div>
          </div>
          <button className="border-none text-white bg-orange-500 p-2 rounded-lg w-full md:w-fit uppercase text-md">
            Proceed to checkout
          </button>
        </div>

        <div className="flex-1">
          <div>
            <p className="text-gray-400">
              If you have a promocode, Enter it here!
            </p>
            <p className="text-xs text-orange-500">
              (Note : this feature is under development)
            </p>
            <div className="mt-2 flex justify-between items-center bg-gray-200 rounded-md">
              <input
                type="text"
                placeholder="Enter promocode"
                className="bg-transparent border-none outline-none rounded-md w-full pl-2.5"
              />
              <button className="w-32 p-2 bg-black border-none text-white rounded-md">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
