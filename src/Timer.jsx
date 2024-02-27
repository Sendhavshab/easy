import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Effect function
    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    // Clean-up function
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array runs effect only once on mount

  return <p>Seconds: {seconds}</p>;
};

export default Timer;
