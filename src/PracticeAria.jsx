import React, { useState, useEffect, useContext } from "react";
import TypingBox from "./TypingBox";
import Stats, { MobileStats } from "./Starts";
import Highlight from "./Highlight";
import WPM from "./WPM";
import Timer from "./Timer";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { CallLavelByPracticeAria } from "./Lavels";
import UserHistory from "./UserHistory";
import { FaChevronDown } from "react-icons/fa6";

function PracticeAria({ userWord, result, func }) {
  const [ShowBackspaceMessage, setShowBackspaceMessage] = useState(false);
  const [inputText, setInputText] = useState("");
  const [wordsTyped, setWordsTyped] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState(0);
  const [haddingClass, setHanddingClass] = useState("");
  const lavel = useParams().lavel;
  const stringWord = useParams().userinput;
  useEffect(() => {
    console.log("useEffecta vala code ");
    if (userWord.length === 0) {
      function Output() {
        return CallLavelByPracticeAria(lavel);
      }

      let xyz = Output();
      if (xyz === undefined) {
        xyz = stringWord.split("+");
      }

      func(xyz);
      func(xyz);

      func(xyz);
    }
  }, []);

  console.log("useEffect ke bahar vala code ");

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    localStorage.setItem("inputText", inputValue);
    const typedWords = inputValue.trim().split(" ");
    const totalWords = typedWords.length;

    setInputText(inputValue);
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

  function handleHaddingClass() {
    console.log("hannding class is ", haddingClass);
    setHanddingClass("hidden" == haddingClass ? "" : "hidden");
  }

  return (
    <div className="px-5  md:mt-6">
      <Link to="/">
        <IoMdArrowRoundBack
          className="fixed hidden md:block left-0 top-16"
          size={40}
        />
      </Link>
      <Highlight userInput={inputText} userWord={userWord} />

      <h2
        className={`lg:text-3xl md:text-xl font-black inline-block relative m-4  ${haddingClass}`}
      >
        Tumhe
        <span className="text-blue-500 transition-transform mx-2 bg-black p-2 inline-block">
          {result}
        </span>
        type karna hai
        <FaChevronDown
          onClick={handleHaddingClass}
          className="absolute cursor-pointer -right-8 -top-1 text-2xl hover:opacity-100 opacity-60 transition-opacity"
        />
      </h2>
      {haddingClass == "hidden" && (
        <FaChevronDown
          onClick={handleHaddingClass}
          className="absolute cursor-pointer right-3 top-12 md:top-3  text-5xl hover:opacity-100 opacity-60 transition-opacity"
        />
      )}
      <div className="md:mt-4">
        <WPM inputText={inputText} />
        <Stats
          wordsTyped={wordsTyped}
          correctWords={correctWords}
          incorrectWords={incorrectWords}
        />
        <MobileStats
          wordsTyped={wordsTyped}
          correctWords={correctWords}
          incorrectWords={incorrectWords}
        ></MobileStats>
      </div>
      <UserHistory mainDivClass="hidden md:block"></UserHistory>
      <TypingBox
        inputText={inputText}
        userWord={userWord}
        value={inputText}
        onChange={handleInputChange}
        setShowBackspaceMessage={setShowBackspaceMessage}
      />

      {ShowBackspaceMessage && (
        <p className="bg-black font-bold text-slate-300 inline-block px-5 rounded-md py-1 fixed right-1">
          backspace key don't allowed!
        </p>
      )}
    </div>
  );
}

export default PracticeAria;
