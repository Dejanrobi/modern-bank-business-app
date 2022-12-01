import React, { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank-logo" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleMenu ? close : menu}
          alt="toggle-menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer z-[6]"
          onClick={() => setToggleMenu((prev) => !prev)}
        />

        <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4  px-10
        my-2 min-w[140px] rounded-xl sidebar
        `}
        >
          <ul className="list-none flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-center text-[16px] text-white 
            ${index === navLinks.length - 1 ? "mb-0" : "mb-6"}
            `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
