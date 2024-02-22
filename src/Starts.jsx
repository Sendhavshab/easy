import React from "react";

const Stats = ({ wordsTyped, correctWords, incorrectWords }) => {
  return (
    <div className="text-center mb-6">
      <p className="text-lg">Words Typed: {wordsTyped}</p>
      <p className="text-lg">Correct Words: {correctWords}</p>
      <p className="text-lg">Incorrect Words: {incorrectWords}</p>
    </div>
  );
};

export default Stats;
