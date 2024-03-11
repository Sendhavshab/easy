import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function MobileManu() {
  const [showManu, setShowManu] = useState(false);
    function ManuOpenerClick(){
      setShowManu(!showManu);
    }


  return (
    <div className="w-full py-2  bg-white hidden min-h-14 relative">
      <GiHamburgerMenu
        onClick={ManuOpenerClick}
        className="text-2xl text-gray-800 absolute right-3 gb"
      />
      {showManu && (
        <div className="bg-indigo-900 h-full w-1/2 fixed right-0 top-7">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row justify-center items-center">
                <a src="">HOME</a>
                <a src="">GIVE FEEDBACK</a>
              </div>
              <div className="flex flex-row justify-center items-center">
                <a src="">CONTACT US</a>
                <a src="">ABOUT US</a>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default MobileManu;
