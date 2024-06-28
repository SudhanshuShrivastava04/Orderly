import React from "react";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <div
      className="bg-orange-500 text-white flex flex-col items-center gap-5 py-5 px-[4vw] pt-20 font-outfit mt-12 rounded-t-[4rem] shadow-2xl"
      id="footer"
    >
      <div className="w-full grid grid-rows-1 grid-cols-4 gap-20">
        <div className="flex flex-col items-start gap-4 col-span-2">
          <div alt="" className="text-6xl text-unbounded w-1/2">
            Orderly
          </div>
          <p>
            Tired of waiting for your culinary masterpieces to materialize while
            your stomach growls louder than a rock concert? With Orderly, you
            can skip the drama of your kitchen disasters and dive straight into
            deliciousness. We know you're too hungry to wait, so let us handle
            the food while you kick back and relax.
          </p>
          <div className="flex w-full gap-2">
            <a href="https://www.linkedin.com/in/sudhanshu-shrivastava-88853b246/" target="_blank" className="cursor-pointer">
              <IoLogoLinkedin size={32} />
            </a>

            <a href="#" target="_blank" className="cursor-pointer">
              <IoLogoInstagram size={32} />
            </a>

            <a href="https://github.com/SudhanshuShrivastava04/Orderly" target="_blank" className="cursor-pointer">
              <IoLogoGithub size={32} href="#" target="_blank" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 col-span-1">
          <h2 className="text-4xl font-medium">Company</h2>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 col-span-1">
          <h2 className="text-4xl font-medium flex items-end">
            Get In Touch
            <GoArrowUpRight size={40} />
          </h2>
          <ul>
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
      <hr className="my-2 mx-0 h-0.5 bg-slate-200 border-none" />
      <p className="footer-copyright">
        Copyright 2025 © Orderly.com - Personal Project.
      </p>
    </div>
  );
};

export default Footer;
