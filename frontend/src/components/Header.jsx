import React from "react";

const Header = () => {
  return (
    <div className="h-[50vw] sm:h-[40vw] md:h-[34vw] my-7 mx-auto font-outfit bg-cover relative bg-no-repeat bg-center bg-header rounded-xl">
      <div className="w-full h-full backdrop-blur-sm rounded-[30px]" />
      <div className="absolute flex justify-between flex-col items-start gap-10 sm:gap-3 md:gap-6 w-4/5 md:w-1/2 top-[5%] md:bottom-[10%] left-2 md:left-[2vw] text-white animate-fadeIn">
        <h2 className="text-3xl md:text-4xl lg:text-responsive font-medium">
          Because Hunger Won't Wait for Your Slow Cooking
        </h2>
        <p className="md:text-base lg:text-lg xl:text-[1vw] hidden lg:block">
          Tired of waiting for your culinary masterpieces to materialize while
          your stomach growls louder than a rock concert? With Orderly, you can
          skip the drama of your kitchen disasters and dive straight into
          deliciousness. We know you're too hungry to wait, so let us handle the
          food while you kick back and relax.
        </p>
        <button className="border-none bg-white rounded-full text-orange-500 px-2 py-1 md:px-4 md:py-2 hover:scale-110 transition duration-300">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
