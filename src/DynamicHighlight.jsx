import React from "react";

const DynamicHighlight = ({ result, currentIndex, userInput, userWord }) => {
  const renderHighlightedWord = (word, index) => {
    let style = {};
    if (index === currentIndex) {
      style = { backgroundColor: "yellow", fontWeight: "bold" };
    } else if (userWord.includes(word.toLowerCase())) {
      style = { color: "blue" };
    } else {
      style = { color: "red" };
    }

    return (
      <span key={index} style={style}>
        {word}{" "}
      </span>
    );
  };

  return (
    <div className="font-bold md:text-lg">
      {result.map((word, index) => renderHighlightedWord(word, index))}
      <input type="text" value={userInput} readOnly />
    </div>
  );
};

export default DynamicHighlight;
