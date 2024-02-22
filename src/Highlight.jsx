import React from "react";

const Highlight = ({ userInput , userWord }) => {
  // User input string
  const inputString = userInput || "";

  // Splitting user input into words
  const words = inputString.split(/\s+/);

  // Function to determine if a word is correct or incorrect
  const isCorrectWord = (word) => {
    return word === userWord;
  };
      
  // Function to render highlighted word
  const renderHighlightedWord = (word, index) => {
    const style = isCorrectWord(word) ? { color: "blue" } : { color: "red" };
    return (
      <span key={index} style={style}>
        {word}{" "}
      </span>
    );
  };

  // Render
  return (
    <div>{words.map((word, index) => renderHighlightedWord(word, index))}</div>
  );
};

export default Highlight;
