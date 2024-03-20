import React, { useContext } from "react";
import LogoIMG from "./TypingLogo.png";
import { Link, useLocation } from "react-router-dom";
import { ResetEverything } from "./App";
import CustomBTNOne from "./Button/ButtonOne";
import Timer from "./Timer";

const Header = () => {
  const handleReset = useContext(ResetEverything);
  const location = useLocation();

  return (
    <div className="w-full bg-white relative h-16 hidden md:block ">
      <div className="max-w-7xl m-auto flex items-center">
        <div className="overflow-clip h-16 w-16">
          <img src={LogoIMG} alt="Logo" />
        </div>

        {location.pathname === "/" ? (
          <Link to="/levels" className="absolute right-1">
            <CustomBTNOne>Practice by Level</CustomBTNOne>
          </Link>
        ) : location.pathname === "/levels" ? (
          <Link to="/" className="absolute right-1">
            <CustomBTNOne>MANUALY TYPE WORDS</CustomBTNOne>
          </Link>
        ) : (
          location.pathname.startsWith("/practicearia") && (
            <div className="absolute right-1  flex items-center gap-5">
              <Timer></Timer>
              <button
                className="block text-yellow-200 bg-red-500 px-6 py-2  border-4
         border-green-400 rounded-xl border-solid font-bold  transition duration-500 ease-in-out transform hover:scale-110"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Header;
