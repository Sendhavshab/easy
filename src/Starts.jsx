import React from "react";

const Stats = ({ wordsTyped, correctWords, incorrectWords }) => {
  return (
    <div className="text-center mb-6 bg-black border rounded-xl ">
      <p className=" m-2 text-lg font-bold inline-block md:block text-blue-600 ">
        Words Typed: {wordsTyped}
      </p>
      <p className=" m-2 text-lg inline-block font-bold md:block text-green-400">
        Correct Words: {correctWords}
      </p>
      <p className="m-2 text-lg inline-block md:block font-bold text-yellow-300">
        Incorrect Words: {incorrectWords}
      </p>
    </div>
  );
};

export default Stats;
