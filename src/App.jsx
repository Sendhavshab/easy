import React, { useState, useEffect } from "react";
import TypingBox from "./TypingBox";
import Stats from "./Starts";
import Highlight from "./Highlight";
import WPM from "./WPM";
import UserInput from "./input";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [wordsTyped, setWordsTyped] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState(0);
  const [userWord, setUserWord] = useState("");
  const [i, setI] = useState(0);
  useEffect(() => {
    const storedInputText = localStorage.getItem("inputText");
    if (storedInputText) {
      setInputText(storedInputText);
    }
  }, []);

  function UserWords(param) {
    setUserWord(param);
    console.log("param is ", param);
  }
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputText(inputValue);
    localStorage.setItem("inputText", inputValue);
    const typedWords = inputValue.trim().split(" ");
    const totalWords = typedWords.length;
    setWordsTyped(totalWords);
    let correctCount = 0;
    let incorrectCount = 0;
    typedWords.forEach((word) => {
      if (word === userWord) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });
    setCorrectWords(correctCount);
    setIncorrectWords(incorrectCount);
  };

  const handleReset = () => {
    setInputText("");
    setWordsTyped(0);
    setCorrectWords(0);
    setIncorrectWords(0);
    localStorage.removeItem("inputText");
  };

  if (i == 0) {
    return <UserInput setI={setI} func={UserWords}></UserInput>;
  }

  return (
    <div className="px-5 bg-yellow-200 overflow-auto w-screen h-screen">
      <h2 className="text-3xl">
        tumhe <span className="text-yellow-500">{userWord}</span> type karna he{" "}
      </h2>

      <Highlight userInput={inputText} userWord={userWord} />
      <div>
        <WPM inputText={inputText} />
        <Stats
          wordsTyped={wordsTyped}
          correctWords={correctWords}
          incorrectWords={incorrectWords}
        />
      </div>

      <TypingBox value={inputText} onChange={handleInputChange} />
      <button
        className="reset-button text-indigo-700 bg-red-500 px-6 py-2 fixed right-2 bottom-36 border-4 border-green-400 rounded-xl border-solid font-bold  "
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
