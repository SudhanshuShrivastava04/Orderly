import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5 font-outfit" id="explore-menu">
      <h1 className="text-4xl font-medium">Explore Our Menu</h1>
      <p className="max-w-[60%] text-gray-400">
        Tired of waiting for your culinary masterpieces to materialize while
        your stomach growls louder than a rock concert? With Orderly, you can
        skip the drama of your kitchen disasters and dive straight into
        deliciousness. We know you're too hungry to wait, so let us handle the
        food while you kick back and relax.
      </p>

      <div className="w-full flex justify-between items-center gap-6 text-center my-4 mx-0 overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div
              className="explore-menu-list-item"
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                alt=""
                className={
                  category === item.menu_name
                    ? "w-[7.5vw] min-w-20 cursor-pointer rounded-[50%] transition duration-200 border-4 border-orange-500 p-0.5"
                    : "w-[7.5vw] min-w-20 cursor-pointer rounded-[50%] transition duration-200"
                }
              />
              <p
                className={
                  category === item.menu_name
                    ? "mt-2.5 text-orange-500 text-xl cursor-pointer"
                    : "mt-2.5 text-gray-400 text-xl cursor-pointer"
                }
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-2 mx-0 h-0.5 bg-slate-200 border-none" />
    </div>
  );
};

export default ExploreMenu;
