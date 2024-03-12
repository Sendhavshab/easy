import React, { memo } from "react";

const CustomBTNfour = ({ children, onClick , className ,disabled }) => {
  return (
    <button
      className={`bg-blue-500 disabled:bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick} disabled={disabled}
    >
      {children}
    </button>
  );
};

export default memo(CustomBTNfour);
