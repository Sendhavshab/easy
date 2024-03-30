import React, { useEffect, useState } from "react";
import Alert from "./Alert";

const AlertShow = ({ type, children, setIsAlert }) => {
  const [AlertShow, setAlertShow] = useState(true);
  console.log("alert show run", type);

  useEffect(() => {
    const id = setTimeout(() => {
      setAlertShow(false);
    //   setIsAlert(false);
    }, 3 * 1000);
    // return () => {
    //   clearTimeout(id);
    // };
  }, []);

  return AlertShow && <Alert type={type}>{children}</Alert>;
};

export default AlertShow;
