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
    <p
      title="seconds"
      onClick={() => setShowName(!showName)}
      className={`font-bold cursor-pointer z-40 ${
        showName ? "text-xl" : " text-2xl md:text-3xl"
      } `}
    >
      {" "}
      {showName && "Second"} {seconds}
    </p>
  );
};

export default Timer;
