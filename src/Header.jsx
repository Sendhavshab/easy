import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="w-full bg-white mb-10">
      <div className="max-w-7xl lg:m-auto flex md:h-16 justify-between items-center">
        <Link to="/">
         
          <img
            title="Logo"
            className="  w-48 hover:transform hover:scale-110 transition duration-300 ease-in-out"
            src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png"
            alt="logo"
          />
        </Link>
        <MdOutlineShoppingBag
          size={34}
          title="Cart"
          className="  hover:transform hover:scale-125 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
export default Header;
