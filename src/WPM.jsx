// WPM.js
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
  }, [inputText, startTime]);

  useEffect(() => {
    const calculateWPM = () => {
      if (!startTime || wordsTyped === 0) {
        setWPM(0);
        return;
      }
      const endTime = Date.now();
      const totalTimeInMinutes = (endTime - startTime) / 60000; // Convert milliseconds to minutes
      const wordsPerMinute = Math.round(wordsTyped / totalTimeInMinutes);
      setWPM(wordsPerMinute);
    };

    calculateWPM();
  }, [startTime, wordsTyped]);

  return (
    <div className="text-center mb-6">
      {inputText.trim() !== "" ? (
        <div>
          <p className="text-lg">Words Typed: {wordsTyped}</p>
          <p className="text-lg">WPM: {wpm}</p>
        </div>
      ) : (
        <p className="text-lg">Start typing to see WPM</p>
      )}
    </div>
  );
};

export default WPM;
