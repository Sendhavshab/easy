import React, { useEffect, useMemo, useState } from "react";

function NextWordShow({ userWord, inputText, className }) {
  const [checkedWord, setCheckWord] = useState(0);
  const [bounceClass, seBounceClass] = useState("animate-bounce");
  const [round , setRound] = useState(0)
  const lastWord = useMemo(
    function () {
      const words = inputText.split(" ");
      const lW = words[words.length - 2];
      console.log(lW);
      return lW;
    },
    [inputText]
  );

  if (
    userWord[checkedWord] === lastWord ||
    userWord[checkedWord] == undefined
  ) {
    if (userWord[checkedWord] == undefined) {
      setTimeout(function () {
        setCheckWord(0);
        setRound(round + 1); 
      }, 100);
    } else {
      setCheckWord(checkedWord + 1);
    }
  }

  return (
    <p

      onClick={() =>
        seBounceClass(
          bounceClass === "animate-bounce" ? "animate-none" : "animate-bounce"
        )
      }
      title="Next word"
      className={` cursor-pointer text-3xl font-bold text-indigo-600  ${className} ${bounceClass}`}
    >
      {userWord[checkedWord]} (R - {round} )
    </p>
  );
}

export default NextWordShow;
