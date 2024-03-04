import React, { useState, useEffect } from "react";
import TypingBox from "./TypingBox";
import Stats from "./Starts";
import Highlight from "./Highlight";
import WPM from "./WPM";
import Timer from "./Timer";
import CustomBTNthree from "./Button/ButtonThree";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { CallLavelByPracticeAria } from "./Lavels";

function PracticeAria({ userWord, result, func , UserOldInput, setUserOldInput}) {
  
  const [copySuccess, setCopySuccess] = useState(false);
  const [ShowBackspaceMessage, setShowBackspaceMessage] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [inputText, setInputText] = useState("");
  const [wordsTyped, setWordsTyped] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState(0);

  if (userWord.length === 0) {
    const lavel = useParams().lavel;

    function Output() {
      return CallLavelByPracticeAria(lavel);
    }

    let xyz = Output();
    if (xyz === undefined) {
      const stringWord = useParams().userinput;
      xyz = stringWord.split("+");
    }

    func(xyz);
  }

  useEffect(() => {
    const storedInputText = localStorage.getItem("inputText");
    if (storedInputText) {
      setUserOldInput(storedInputText);
    }
  }, []);

  const handleReset = () => {
    setInputText("");
    setWordsTyped(0);
    setCorrectWords(0);
    setIncorrectWords(0);
    localStorage.removeItem("inputText");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(UserOldInput);
    setCopySuccess(true);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setInputText(inputValue);
    localStorage.setItem("inputText", inputValue);
    const typedWords = inputValue.trim().split(" ");
    const totalWords = typedWords.length;
    setWordsTyped(totalWords);
    let correctCount = 0;
    let incorrectCount = 0;
    typedWords.forEach((word) => {
      if (userWord.includes(word)) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });
    setCorrectWords(correctCount);
    setIncorrectWords(incorrectCount);
  };

  let oldInput;
  if (UserOldInput !== "") {
    if (UserOldInput.split(" ").length > 5) {
      oldInput = (
        <>
          <p>
            Your old input is:{" "}
            {showAll ? UserOldInput : UserOldInput.substring(0, 5) + "..."}{" "}
          </p>
          <button onClick={() => setShowAll(!showAll)}>
            Show {showAll ? "less" : "more"}
          </button>
        </>
      );
    } else {
      oldInput = <p>Your old input is: {UserOldInput}</p>;
    }
  }

  return (
    <div className="px-5 w-screen h-screen md:mt-6">
      <Link to="/">
        <IoMdArrowRoundBack className="fixed left-0 top-3" size={40} />
      </Link>

      <Highlight userInput={inputText} userWord={userWord} />
      <h2 className="text-3xl m-4 hading-font">
        Tumhe
        <span className="text-blue-500">{result}</span>
        type karna hai
      </h2>

      <div className="md:mt-4">
        <WPM inputText={inputText} />
        <Stats
          wordsTyped={wordsTyped}
          correctWords={correctWords}
          incorrectWords={incorrectWords}
        />
      </div>
      <div className="mt-4">
        {oldInput}
        {copySuccess && <p>Copied!</p>}
        {oldInput ? (
          <CustomBTNthree onClick={handleCopyClick}>Copy</CustomBTNthree>
        ) : (
          true
        )}
      </div>
      <TypingBox
        value={inputText}
        onChange={handleInputChange}
        setShowBackspaceMessage={setShowBackspaceMessage}
      />
      <Timer />
      <button
        className="text-yellow-200 bg-red-500 px-2 md:px-6 py-1 md:py-2 fixed right-2 bottom-36 border-4
         border-green-400 rounded-xl border-solid font-bold transition duration-500 ease-in-out transform hover:scale-110"
        onClick={handleReset}
      >
        Reset
      </button>
      {ShowBackspaceMessage && (
        <p className="bg-black font-bold text-slate-300 inline-block px-5 rounded-md py-1 fixed right-1">
          backspace key don't allowed
        </p>
      )}
    </div>
  );
}

export default PracticeAria;
