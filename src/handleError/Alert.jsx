import React, { Children } from "react";
import { MdDangerous } from "react-icons/md";

import { FaCheckCircle } from "react-icons/fa";
import { IoWarningSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const AlertMap = {
  success: {
    backgroundColor: "bg-green-600  hover:bg-green-500",
    Icon: FaCheckCircle,
  },
  error: {
    backgroundColor: " bg-red-600   hover:bg-red-500",
    Icon: MdDangerous,
  },
  warning: {
    backgroundColor: "bg-yellow-500 hover:bg-yellow-400",
    Icon: IoWarningSharp,
  },
  info: {
    backgroundColor: "bg-blue-600   hover:bg-blue-500",
    Icon: FaInfoCircle,
  },
};

const Alert = ({ type, children, setAlertShow }) => {
  const { backgroundColor, Icon } = AlertMap[type];
  return (
    <div
      className={`opacity-60 flex p-2 m-4 min-h-16 relative  gap-5 hover:scale-105 transition hover:-translate-x-2 hover:opacity-95  w-64 rounded-md shadow-sm shadow-black   ${backgroundColor} `}
    >
      <Icon className="text-3xl text-white  self-center "></Icon>
      <div>
        <h1 className="text-white text-xl font-bold">{type}</h1>
        <p className="text-white text-sm opacity-85">{children}</p>
      </div>
      <RxCross2 onClick={() => {setAlertShow(false)}} className="opacity-60  absolute right-1 top-1 text-xl transition hover:scale-125 hover:opacity-100 cursor-pointer " />
    </div>
  );
};

export default Alert;
