import React from "react";
import { navLinks } from "../../constants";
import { logo } from "../../assets";
import { UserIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  return (
    <nav className="py-6 items-center justify-between flex w-full">
      <div className="flex items-center hover:scale-105">
        <img src={logo} className="w-8 h-8" />
        <p className="ml-4 text-secondary font-semibold hover:font-bold">
          Hoo Recipes
        </p>
      </div>
      <ul className="list-none sm:flex hidden flex-1 items-center">
        <div className="flex flex-1 justify-center w-full">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`py-2 px-2 rounded-md text-white font-poppins font-normal cursor-pointer text-[16px] hover:bg-[#D7983D] hover:font-semibold  ${
                index !== navLinks.length ? "mr-10" : ""
              }`}>
              {link.title}
            </li>
          ))}
        </div>

        <li className="cursor-pointer">
          <UserIcon className="h-5 w-5 text-white mr-5" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
