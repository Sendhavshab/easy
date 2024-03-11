import React, { memo } from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
function Header({ ProductsValue }) {
  return (
    <div className="w-full bg-white mb-10 hidden md:block">
      <div className="max-w-7xl lg:m-auto flex md:h-16 justify-between items-center">
        <Link to="/">
          <img
            title="Logo"
            className="  w-48 hover:transform hover:scale-110 transition duration-300 ease-in-out"
            src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png"
            alt="logo"
          />
        </Link>
        <div className=" m-4 flex items-center gap-3">
          <Link className="relative mr-5 mt-3 inline-block" to="/mycart">
            <BsCartPlus
              size={34}
              title="Cart"
              className="  hover:transform hover:scale-125 transition duration-300 ease-in-out"
            />
            <p className="absolute -top-3 font-bold size-5 bg-green-400 rounded-full text-center px-1 -right-2">
              {ProductsValue}
            </p>
          </Link>
          <div className="py-1 px-2 bg-slate-400 border border-blue-300 border-solid rounded-md flex gap-1 ">
            <button className="py-2 px-4 font-bold bg-white ">
              <Link to="/signup">sign Up</Link>
            </button>
            <button className="py-2 px-4 font-bold text-white bg-indigo-600 ">
              <Link to="/signin">sign In </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Header);
