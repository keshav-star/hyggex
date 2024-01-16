import React from "react";
import logo from "../assets/Component 40.svg";

const Navbar = () => {
  return (
    <div className="nav flex justify-between px-20 py-8 items-center">
      <img src={logo} alt="" />
      <ul className="flex items-center cursor-pointer">
        <li className="text-xl px-6 hover:text-gray-500">Home</li>
        <li className="text-xl px-6 hover:text-gray-500">Flashcard</li>
        <li className="text-xl px-6 hover:text-gray-500">Contact</li>
        <li className="text-xl px-6 hover:text-gray-500">FAQ</li>
        <li className="bg-gradient-to-b from-[#06286E] to-[#164EC0] text-xl p-2 mx-6 px-8 rounded-full text-white">
          Login
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
