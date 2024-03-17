import React, { useState } from "react";
import { IoArrowRedoCircle, IoArrowUndoCircle } from "react-icons/io5";

export function MobileStats({ wordsTyped, correctWords, incorrectWords }) {
  const [showName, setSowNmae] = useState(false);

  return (
    <div className="md:hidden flex flex-col gap-2  bg-gray-600 fixed right-0 rounded-md  top-1/2  p-1 text-3xl">
      {showName ? (
        <IoArrowRedoCircle onClick={() => setSowNmae(!showName)} />
      ) : (
        <IoArrowUndoCircle onClick={() => setSowNmae(!showName)} />
      )}
      <p className=" m-2 text-lg font-bold inline-block md:block text-blue-600 ">
        {wordsTyped} {showName && "Words Typed"}
      </p>
      <p className=" m-2 text-lg inline-block font-bold md:block text-green-400">
        {correctWords} {showName && "Correct Words"}
      </p>
      <p className="m-2 text-lg inline-block md:block font-bold text-red-700">
        {incorrectWords} {showName && "Incorrect Words"}
      </p>
    </div>
  );
}

const Stats = ({ wordsTyped, correctWords, incorrectWords }) => {
  return (
    <div>
      <div className=" hidden md:block text-center mb-6 bg-black border rounded-xl ">
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
    </div>
  );
};

export default Stats;
