import React, { memo } from "react";
import notFoundImage from "./notFoundImage.jpg";
import { Link } from "react-router-dom";
import CustomBTNthree from "./Button/ButtonThree";
function NotFoundPage() {
  return (
    <div className="flex flex-col max-w-7xl sm:flex-row gap-3 m-4 bg-gray-400  rounded-md  xl:m-auto items-center justify-center">
      <div className="aspect-square">
        <img
          className="w-full h-full object-cover"
          src={notFoundImage}
          alt="Not Found "
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="font-bold text-4xl md:text-5xl text-center">
          Sorry this Page can't avalable
        </h1>
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <Link to="/">
          <CustomBTNthree>GO HOME </CustomBTNthree>
        </Link>
      </div>
    </div>
  );
}

export default memo(NotFoundPage);
