import React, { memo } from "react";

const CustomBTNthree = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r m-1 from-purple-400 to-indigo-500 hover:from-purple-500 hover:to-indigo-600
       text-white font-semibold py-1 px-4 md:py-3 md:px-8 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-indigo-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default memo(CustomBTNthree);
