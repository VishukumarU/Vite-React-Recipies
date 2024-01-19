import React from "react";
import { navLinks } from "../../constants";

const NavBar = () => {
  return (
    <nav className="py-6 items-center justify-between flex w-full">
      <ul className="list-none sm:flex hidden flex-1 justify-center items-center">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`text-white font-poppins font-normal cursor-pointer text-[16px] ${
              index !== navLinks.length ? "mr-10" : ""
            }`}>
            {link.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
