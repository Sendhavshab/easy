import React, { memo, useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GoHistory } from "react-icons/go";
import { GrClearOption } from "react-icons/gr";
import LogoImage from "./TypingLogo.png";
import { ResetEverything } from "./App";
import { MdOutlineGrading } from "react-icons/md";
import Timer from "./Timer";
function MobileManu() {
  const [showManu, setShowManu] = useState(false);

  function ManuOpenerClick() {
    setShowManu(!showManu);
  }

  const location = useLocation();
  const handleReset = useContext(ResetEverything);

 
  return (
    <div>
      <div className="w-screen flex items-center py-2  bg-white md:hidden  min-h-14 relative ">
        <Link to="/">
          <img
            title="Logo"
            src={LogoImage}
            width={48}
            className="inline-block"
          />
        </Link>
        <div className="absolute right-2 flex gap-6">
          {location.pathname.startsWith("/practicearia") && <Timer></Timer>}
          <GiHamburgerMenu
            onClick={ManuOpenerClick}
            className="text-3xl text-gray-800 "
          />
        </div>
      </div>
      {showManu && (
        <div
          onClick={ManuOpenerClick}
          className={`w-screen h-screen z-20 bg-black bg-opacity-80 `}
        >
          <div className=" bg-indigo-900 h-full  w-3/4 fixed top-0 right-0  p-8 z-10">
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
                  to="/userhistory"
                  onClick={ManuOpenerClick}
                  className="py-3  border-b-4 "
                >
                  <GoHistory className="inline-block mr-2" />
                  HISTORY
                </Link>
                <Link
                  to="/levels"
                  onClick={ManuOpenerClick}
                  className="py-3  border-b-4 "
                >
                  <MdOutlineGrading className="inline-block mr-2" />
                  LEVELS
                </Link>
                <Link
                  onClick={handleReset}
                  className="py-3 text-red-700 border-b-4 "
                >
                  <GrClearOption className="inline-block mr-2" />
                  RESET
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
    </div>
  );
}

export default memo(MobileManu);
