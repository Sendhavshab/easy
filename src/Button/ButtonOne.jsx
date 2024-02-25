import React from "react";

const CustomBTNOne = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`block m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomBTNOne;
