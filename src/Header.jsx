import React, { useContext } from "react";
import LogoIMG from "./TypingLogo.png";

import { ResetEverything } from "./App";

const Header = () => {
  const handleReset = useContext(ResetEverything);

  return (
    <div className="w-full bg-white relative h-16 hidden md:block ">
      <div className="max-w-7xl m-auto flex items-center">
        <div class="overflow-clip h-16 w-16">
          <img src={LogoIMG} alt="Example" />
        </div>

        <button
          className=" hidden md:block text-yellow-200 bg-red-500 px-6 py-2  border-4
         border-green-400 rounded-xl border-solid font-bold absolute right-1 transition duration-500 ease-in-out transform hover:scale-110"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Header;
