import React from "react";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <div
      className="bg-orange-500 text-white flex flex-col items-center gap-5 py-5 px-4 sm:px-6 lg:px-8 md:pt-20 pt-10 font-outfit mt-12 md:rounded-t-[4rem] rounded-t-[2rem] shadow-2xl"
      id="footer"
    >
      <div className="w-full grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
        <div className="flex flex-col items-start gap-4 col-span-2">
          <div
            alt=""
            className="text-4xl lg:text-6xl text-unbounded w-full lg:w-1/2"
          >
            Orderly
          </div>
          <p className="hidden md:block">
            Tired of waiting for your culinary masterpieces to materialize while
            your stomach growls louder than a rock concert? With Orderly, you
            can skip the drama of your kitchen disasters and dive straight into
            deliciousness. We know you're too hungry to wait, so let us handle
            the food while you kick back and relax.
          </p>
          <div className="flex w-full gap-4">
            <a
              href="https://www.linkedin.com/in/sudhanshu-shrivastava-88853b246/"
              target="_blank"
              className="cursor-pointer"
            >
              <IoLogoLinkedin size={32} />
            </a>
            <a href="#" target="_blank" className="cursor-pointer">
              <IoLogoInstagram size={32} />
            </a>
            <a
              href="https://github.com/SudhanshuShrivastava04/Orderly"
              target="_blank"
              className="cursor-pointer"
            >
              <IoLogoGithub size={32} />
            </a>
          </div>
        </div>
        <div className="md:flex flex-col items-start gap-4 hidden">
          <h2 className="text-2xl lg:text-4xl font-medium">Company</h2>
          <ul className="text-sm lg:text-base">
            <li>Home</li>
            <li>Menu</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl lg:text-4xl font-medium flex items-end justify-center">
            Get In Touch
            <GoArrowUpRight className="text-2xl lg:text-4xl md:text-3xl" />
          </h2>
          <ul className="text-sm lg:text-base">
            <li>+(91) 817-145-4200</li>
            <li>
              <a
                href="mailto:sudhanshushrivastava004@gmail.com"
                target="_blank"
              >
                SudhanshuShrivastava004@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-sm lg:text-base text-center">
        Copyright 2025 © Orderly.com - Personal Project.
      </p>
    </div>
  );
};

export default Footer;
