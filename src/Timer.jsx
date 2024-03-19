import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [showName, setShowName] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p title="seconds"
      onClick={() => setShowName(!showName)}
      className="font-bold fixed cursor-pointer z-40 md:right-6 top-0"
    >
      {" "}
      {showName && "Second"} {seconds}
    </p>
  );
};

export default Timer;
