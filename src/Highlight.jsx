import React from "react";

const Highlight = ({ userInput, userWord }) => {
  const inputString = userInput || "";
  const words = inputString.split(/\s+/);

  const isCorrectWord = (word) => {
    console.log("word is ", word);
     console.log("userword is ",userWord);
    
     return userWord.includes(word);
  };

  const renderHighlightedWord = (word, index) => {
    const style = isCorrectWord(word) ? { color: "blue" } : { color: "red" };
    return (
      <span key={index} style={style}>
        {word}{" "}
      </span>
    );
  };

  return (
    <div>{words.map((word, index) => renderHighlightedWord(word, index))}</div>
  );
};

export default Highlight;
