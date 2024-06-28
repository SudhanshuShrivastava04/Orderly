import React from "react";

const Header = () => {
  return (
    <div className="h-[34vw] my-7 mx-auto font-outfit bg-cover relative bg-no-repeat bg-center bg-header">
      <div className="w-full h-full backdrop-blur-sm rounded-[30px]" />
      <div className="absolute flex flex-col items-start gap-[1.5vw] w-1/2 bottom-[10%] left-[6vw] text-white animate-fadeIn">
        <h2 className="text-responsive font-medium">
          Because Hunger Won't Wait for Your Slow Cooking'
        </h2>
        <p className="text-[1vw]">
          Tired of waiting for your culinary masterpieces to materialize while
          your stomach growls louder than a rock concert? With Orderly, you can
          skip the drama of your kitchen disasters and dive straight into
          deliciousness. We know you're too hungry to wait, so let us handle the
          food while you kick back and relax.
        </p>
        <button className="border-none bg-white rounded-full text-orange-500 px-4 py-2 hover:scale-110 transition duration-300">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
