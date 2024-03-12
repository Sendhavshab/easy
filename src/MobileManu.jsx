import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";

function MobileManu() {
  const [showManu, setShowManu] = useState(false);

  function ManuOpenerClick() {
    setShowManu(!showManu);
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
                  to="/signin"
                  onClick={ManuOpenerClick}
                  className="py-3  border-b-4 "
                >
                  <MdAccountCircle className="inline-block mr-2" />
                  LOGIN
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
            className="text-3xl fixed right-7 top-7"
            onClick={ManuOpenerClick}
          />
        </div>
      )}
      <Link to="/">
        <img
          title="Logo"
          className="  w-40 absolute right-2"
          src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png"
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default MobileManu;
