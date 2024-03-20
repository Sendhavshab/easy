import React, { useState, useEffect } from "react";

const CustomBTNTwo = ({ onClick, children, className , ...props }) => {
  return (
    <div>
      <button
        onClick={onClick}
        {...props}
        className={`block m-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomBTNTwo;
