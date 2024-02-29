import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
function Header() {
  return (
    <div className="flex w-full md:h-16 bg-white p-2 mb-10 relative ">
      <img
        className=" w-48 hover:transform hover:scale-110 transition duration-300 ease-in-out"
        src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png"
        alt="logo"
      />
      <MdOutlineShoppingBag
        size={34}
        className=" absolute right-10 top-2  hover:transform hover:scale-125 transition duration-300 ease-in-out"
      />
    </div>
  );
}
export default Header;
