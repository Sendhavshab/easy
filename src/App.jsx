import React, { useState } from "react";
import TypingBox from "./TypingBox";
import Stats from "./Starts";
import Highlight from "./Highlight";
import WPM from "./WPM";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [wordsTyped, setWordsTyped] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputText(inputValue);
    const typedWords = inputValue.trim().split(" ");
    const totalWords = typedWords.length;
    setWordsTyped(totalWords);
    let correctCount = 0;
    let incorrectCount = 0;
    typedWords.forEach((word) => {
      if (word === "asdf" || word === ";lkj") {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });
    setCorrectWords(correctCount);
    setIncorrectWords(incorrectCount);
  };

  return (
    <div className="px-5 bg-slate-600 w-screen h-screen">
      <h2 className="text-3xl">
        tumhe <span className="text-yellow-500">asdf ;lkj</span> type karna he{" "}
      </h2>
      <Highlight userInput={inputText} />
      <div>
        <Stats
          wordsTyped={wordsTyped}
          correctWords={correctWords}
          incorrectWords={incorrectWords}
        />
        <WPM inputText={inputText} />
      </div>
      <TypingBox value={inputText} onChange={handleInputChange} />
    </div>
  );
};

export default App;
