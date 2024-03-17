import React, { useEffect, useMemo, useState } from "react";

function NextWordShow({ userWord, inputText, className }) {
  const [checkedWord, setCheckWord] = useState(0);
  const [bounceClass, seBounceClass] = useState("animate-bounce");
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
      className={` text-3xl font-bold text-indigo-600  ${className} ${bounceClass}`}
    >
      {userWord[checkedWord]}
    </p>
  );
}

export default NextWordShow;
