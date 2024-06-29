import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const LoginModal = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="fixed z-10 w-full h-full bg-[#00000090] grid font-outfit backdrop-blur-sm">
      <form className="place-self-center bg-white py-2 px-4 rounded-xl w-full md:max-w-2xl lg:w-1/3 shadow-md flex flex-col animate-reveal justify-between overflow-hidden">
        <div className="w-full flex justify-between items-start py-2">
          <h2 className="text-4xl font-medium text-orange-500">{currState}</h2>
          <RxCross2 onClick={() => setShowLogin(false)} size={32} />
        </div>

        <div className="flex flex-col items-start gap-4 w-full">
          {currState === "Login" ? (
            <></>
          ) : (
            <div className="flex flex-col items-start w-full gap-2">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full p-2 border rounded-md"
              />
            </div>
          )}
          <div className="flex flex-col items-start w-full gap-2">
            <label>Email</label>
            <input type="email" placeholder="email@example.com" className="w-full p-2 border rounded-md" required />
          </div>
          <div className="flex flex-col items-start w-full gap-2">
            <label>Password</label>
            <input type="password" placeholder="Enter Password" className="w-full p-2 border rounded-md" required />
          </div>
        </div>

        <button className="border border-orange-500 rounded-full text-orange-500 text-md transition duration-300 ease-in-out hover:scale-105 hover:bg-orange-500 hover:text-white w-fit py-1.5 px-4">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="w-full flex gap-2">
          <input type="checkbox" required className="checked:bg-yellow-200" />
          <p className="text-gray-400">By continuing, I Agree to the terms of use and privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p className="text-gray-400 text-center text-sm cursor-pointer">
            Create a New Account?{" "}
            <span onClick={() => setCurrState("Sign Up")} className="text-orange-500 font-medium"> Sign Up</span>
          </p>
        ) : (
          <p className="text-gray-400 text-center text-sm cursor-pointer">
            Already have an account?
            <span onClick={() => setCurrState("Login")} className="text-orange-500 font-medium"> Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginModal;
