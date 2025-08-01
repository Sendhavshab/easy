import React, { memo, useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { AddTocartContext, CartProviderHOC, UserAccount, UserProviderHOC } from "./HOC/Context";
import { FaUserCircle } from "react-icons/fa";
// import { UserAccountContextHOC } from "./App";


function MobileManu({user , cartProductsValue}) {

  const [showManu, setShowManu] = useState(false);

  function ManuOpenerClick() {
    setShowManu(!showManu);
  }
 let Account = {
   to: "/login",
   children: "LOGIN",
   Icon: MdAccountCircle,
 };
if(user){
  Account = {
    to: "/myprofile",
    children: "PROFILE",
    Icon: FaUserCircle,
  };
}

  return (
    <div className="w-full py-2  bg-white md:hidden min-h-14 relative ">
      <GiHamburgerMenu
        onClick={ManuOpenerClick}
        className="text-3xl text-gray-800 absolute left-2"
      />
      {showManu && (
        <div className=" w-screen h-screen bg-black bg-opacity-80">
          <div className=" bg-indigo-900 h-full  w-3/4 fixed top-0 left-0  p-8 z-10">
            <div className="text-xl flex flex-col gap-3">
              <div className="flex flex-col  gap-5 font-bold  text-white ">
                <Link
                  to="/"
                  onClick={ManuOpenerClick}
                  className=" border-b-4  py-3"
                >
                  <GoHomeFill className="inline-block mr-2" />
                  HOME
                </Link>
                <Link
                  to={Account.to}
                  onClick={ManuOpenerClick}
                  className="py-3  border-b-4 "
                >
                  <Account.Icon className="inline-block mr-2" />
                  {Account.children}
                </Link>
                <Link
                  to="/mycart"
                  onClick={ManuOpenerClick}
                  className="py-3  border-b-4 "
                >
                  <MdShoppingCartCheckout className="inline-block mr-2" />
                  CART
                </Link>
              </div>
            </div>
          </div>
          <RxCross2
            className="text-3xl font-bold fixed right-14 top-7"
            onClick={ManuOpenerClick}
          />
        </div>
      )}

      <div className="flex items-center justify-center">
        <Link to="/">
          <img
            title="Logo"
            className="  w-40 inline-block"
            src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png"
            alt="logo"
          />
        </Link>
        <Link className="absolute right-2 mr-5  inline-block" to="/mycart">
          <BsCartPlus size={34} title="Cart" className="" />
          <p className="absolute -top-4 font-bold size-6 bg-green-400 rounded-full text-center px-1 -right-2">
            {cartProductsValue}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default UserProviderHOC(memo(CartProviderHOC(MobileManu)));
