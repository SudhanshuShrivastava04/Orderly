import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5 font-outfit" id="explore-menu">
      <h1 className="text-4xl font-medium">Explore Our Menu</h1>
      <p className="lg:max-w-[60%] lg:text-lg w-full text-gray-400">
        Are you tired of kitchen mishaps and long waits for your favorite meals?
        At Orderly, we eliminate the hassle of cooking and deliver mouthwatering
        dishes straight to your door. Whether you're craving a quick snack or a
        gourmet feast, our extensive menu has something for everyone. Skip the
        stress and savor the flavor—Orderly makes it easy to enjoy delicious,
        restaurant-quality meals from the comfort of your home. Relax and let us
        handle the cooking so you can indulge in a culinary experience without
        lifting a finger.
      </p>

      <div className="w-full flex justify-between items-center gap-6 text-center my-4 mx-0 overflow-x-scroll category">
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
