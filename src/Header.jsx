import React, { memo, useContext } from "react";
// import { UserAccountContextHOC } from "./App";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
 
import { FaUserCircle } from "react-icons/fa";
import {  CartProviderHOC, UserProviderHOC } from "./HOC/Context";
function Header({user , cartProductsValue}) {
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
          <Link
            className="relative mr-5 mt-3 hover:transform hover:scale-125 transition duration-300 ease-in-out inline-block"
            to="/mycart"
          >
            <BsCartPlus size={34} title="Cart" className="  " />
            <p className="absolute -top-4 font-bold size-6 bg-green-400 rounded-full text-center px-1 -right-2">
              {cartProductsValue}
            </p>
          </Link>
          {user ? (
           <Link to="/myprofile"> <FaUserCircle className="text-3xl hover:scale-110 transition transform  cursor-pointer" /></Link>
          ) : (
            <div className="py-1 px-2 bg-slate-400 border border-blue-300 border-solid rounded-md flex gap-1 ">
              <Link to="/signup">
                {" "}
                <button className="py-2 px-4 font-bold bg-white hover:bg-green-500">
                  sign Up
                </button>
              </Link>
              <Link to="/login">
                {" "}
                <button className="py-2 px-4  font-bold hover:bg-green-500 hover:text-black text-white bg-indigo-600 ">
                  Log In
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default UserProviderHOC(CartProviderHOC( memo(Header)));
