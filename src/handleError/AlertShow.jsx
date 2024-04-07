import React, { useEffect, useState } from "react";
import Alert from "./Alert";

const AlertShow = ({ type, children }) => {
  const [AlertShow, setAlertShow] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setAlertShow(false);
    }, 4 * 1000);
  }, []);

  return (
    AlertShow && (
      <Alert setAlertShow={setAlertShow} type={type}>
        {children}
      </Alert>
    )
  );
};

export default AlertShow;
