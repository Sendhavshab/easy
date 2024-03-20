import React, { useState, useEffect } from "react";

const WPM = ({ inputText }) => {
  const [startTime, setStartTime] = useState(null);
  const [wordsTyped, setWordsTyped] = useState(0);
  const [wpm, setWPM] = useState(0);

  useEffect(() => {
    if (inputText.trim() !== "") {
      if (!startTime) {
        setStartTime(Date.now());
      }
      const typedWords = inputText
        .trim()
        .split(" ")
        .filter((word) => word !== "");
      const totalWords = typedWords.length;
      setWordsTyped(totalWords);
    }
  }, [inputText]);

  useEffect(() => {
    const calculateWPM = () => {
      if (!startTime || wordsTyped === 0) {
        setWPM(0);
        return;
      }
      const endTime = Date.now();
      const totalTimeInSeconds = (endTime - startTime) / 1000; // Convert milliseconds to seconds
      const wordsPerSecond = wordsTyped / totalTimeInSeconds;
      const wordsPerMinute = Math.round(wordsPerSecond * 60); // Convert words per second to words per minute
      setWPM(wordsPerMinute);
    };

    calculateWPM();
  }, [startTime, wordsTyped]);

  return (
    <div className="text-center md:mb-6">
      {inputText.trim() !== "" ? (
        <div>
          
          <p className="md:text-lg inline-block md:block font-bold">WPM: {wpm}</p>
        </div>
      ) : (
        <p className="text-lg font-bold">Start typing to see WPM</p>
      )}
    </div>
  );
};

export default WPM;
 