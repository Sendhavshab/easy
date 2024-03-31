import React from "react";
import AlertShow from "./AlertShow";

const AlertList = ({ type, children, howMuch , className }) => {
  return (
    isAlert !== 0 && (
      <div
        className={` absolute overflow-hidden max-h-52 md:max-h-96 lg:max-h-none flex flex-col top-3 right-3 ${className}`}
      >
        {[...Array(howMuch).keys()].map((i) => {
          return (
            <AlertShow key={i} type={type}>
              {children}
            </AlertShow>
          );
        })}
      </div>
    )
  );
};

export default AlertList;
