import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
function Header() {
  return (
    <div className="flex w-full h-14 bg-white p-2">
      <img
        src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png"
        alt="logo"
      />
      <MdOutlineShoppingBag size={32} className="absolute right-10" />
    </div>
  );
}
export default Header;

