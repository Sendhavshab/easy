import React, { useContext } from "react";
import LogoIMG from "./TypingLogo.png";
import { Link, useLocation } from "react-router-dom";
import { ResetEverything } from "./App";
import CustomBTNOne from "./Button/ButtonOne";

const Header = () => {
  const handleReset = useContext(ResetEverything);
  const location = useLocation();

  return (
    <div className="w-full bg-white relative h-16 hidden md:block ">
      <div className="max-w-7xl m-auto flex items-center">
        <div className="overflow-clip h-16 w-16">
          <img src={LogoIMG} alt="Example" />
        </div>

        {location.pathname === "/" ? (
          <Link to="/lavels" className="absolute right-1">
            <CustomBTNOne>Practice by Lavel</CustomBTNOne>
          </Link>
        ) : location.pathname === "/lavels" ? (
          <Link to="/" className="absolute right-1">
            <CustomBTNOne>MANUALY TYPE WORDS</CustomBTNOne>
          </Link>
        ) : (
          <button
            className="block text-yellow-200 bg-red-500 px-6 py-2  border-4
         border-green-400 rounded-xl border-solid font-bold absolute right-1 transition duration-500 ease-in-out transform hover:scale-110"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
