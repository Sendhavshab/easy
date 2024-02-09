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
      const typedWords = inputText.trim().split(" ");
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
    <div>
      {inputText.trim() !== "" ? (
        <div>
          <div>Words Typed: {wordsTyped}</div>
          <div>WPM: {wpm}</div>
        </div>
      ) : (
        <div>Start typing to see WPM</div>
      )}
    </div>
  );
};

export default WPM;
