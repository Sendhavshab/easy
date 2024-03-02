import React from "react";
import CustomBTNOne, { Anchor } from "./Button/ButtonOne";

function Footer() {
  return (
    <div>
      <div className=" w-full h-40 md:h-16 mt-3 bg-gray-600  relative shadow-lg">
        <div className="md:absolute top-4 ">
          <div className="flex justify-evenly md:inline-block">
            <Anchor src="">HOME</Anchor>
            <Anchor src="">GIVE FEEDBACK</Anchor>
          </div>
          <div className="flex justify-evenly md:inline-block">
            <Anchor src="">CONTACT US</Anchor>
            <Anchor src="">ABOUT US</Anchor>
          </div>
        </div>
        <div className="md:absolute right-7 top-1 ">
          <input
            className="border border-gray-300 rounded-xl px-3 py-1 hover:transform hover:scale-105 transition duration-300 ease-in-out"
            type="email"
            placeholder="Enter your email address"
          />
          <CustomBTNOne>SUBMIT</CustomBTNOne>
        </div>
      </div>
    </div>
  );
}

export default Footer;
