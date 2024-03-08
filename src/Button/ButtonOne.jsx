import React, { memo } from "react";

const CustomBTNOne = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={` m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ${className}`}
    >
      {children}
    </button>
  );
};
export function Anchor({ children, className, src }) {
  return (
    <a
      href={src}
      className={`${className} font-bold m-3  text-green-500  hover:border-b-2  `}
    >
      {children}
    </a>
    
  );
}

export default memo(CustomBTNOne);
