import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="flex flex-col md:flex-row items-start justify-between gap-12 mt-12 font-outfit">
      <div className="max-w-3xl">
        <p className="text-3xl font-medium mb-4">Delivery Information</p>
        <div className="flex gap-2.5">
          <input
            type="text"
            placeholder="First Name"
            className="mb-4 w-full p-2.5 border border-gray-400 rounded-md outline-orange-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="mb-4 w-full p-2.5 border border-gray-400 rounded-md outline-orange-500"
          />
        </div>
        <input
          type="email"
          placeholder="email@example.com"
          className="mb-4 w-full p-2.5 border border-gray-400 rounded-md outline-orange-500"
        />
        <input
          type="text"
          placeholder="Street"
          className="mb-4 w-full p-2.5 border border-gray-400 rounded-md outline-orange-500"
        />
        <div className="flex gap-2.5">
          <input
            type="text"
            placeholder="City"
            className="mb-4 w-full p-2.5 border border-gray-400 rounded-md outline-orange-500"
          />
          <input
            type="text"
            placeholder="State"
            className="mb-4 w-full p-2.5 border border-gray-400 rounded-md outline-orange-500"
          />
        </div>
        <div className="flex gap-2.5">
          <input
            type="number"
            placeholder="Zip Code"
            className="mb-4 w-full p-2.5 border border-gray-400 rounded-md outline-orange-500"
          />
          <input
            type="text"
            placeholder="Country"
            className="mb-4 w-full p-2.5 border border-gray-400 rounded-md outline-orange-500"
          />
        </div>
        <input
          type="text"
          name=""
          placeholder="Phone number"
          className="mb-4 w-full p-2.5 border border-gray-400 rounded-md outline-orange-500"
        />
      </div>

      <div className="w-full max-w-3xl">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-medium mb-4">Cart Total</h2>
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
          <button
            disabled={getTotalCartAmount() === 0}
            className="border-none disabled:bg-gray-400 text-white bg-orange-500 p-2 rounded-lg w-full md:w-fit uppercase text-md mt-5 hover:scale-105 transition duration-300"
          >
            Proceed to payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
