import React, { useState, useEffect } from "react";
import CustomBTNfour from "./Button/ButtonFour";
import { Link } from "react-router-dom";
import CustomBTNOne from "./Button/ButtonOne";
const UserInput = ({ func, result }) => {
  const [inputValue, setInputValue] = useState("");
  const [userWords, setUserWords] = useState([]);
  const [userOldResults, setUserOldResults] = useState("");
  const [string, setString] = useState("");
  useEffect(() => {
    const storedUserWords = localStorage.getItem("userWords");
    if (storedUserWords) {
      setUserOldResults(storedUserWords);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("userWords", userWords);
  }, [userWords]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setInputValue(inputValue);
  };

  const handleAddWord = () => {
    //split se karna he ye
    if (inputValue == "") {
      return alert("Please enter anything");
    }
    const updatedWords = userWords ? [...userWords, inputValue] : [inputValue];
    let stringWord =
      updatedWords.slice(0, -1).join("+") +
      "+" +
      updatedWords[updatedWords.length - 1];
    setString(stringWord);
    setUserWords(updatedWords);
    func(updatedWords);
    setInputValue("");
  };

  const handleReset = () => {
    localStorage.removeItem("userWords");
    setUserWords("");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Link to="/lavels">
        <CustomBTNOne>Practice by Lavel</CustomBTNOne>
      </Link>
      <input
        className="border border-gray-300 rounded-md px-3 py-2"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter word"
      />
      <CustomBTNfour onClick={handleAddWord}>Add Word</CustomBTNfour>

      <p className="text-lg">User Words: {result}</p>

      <Link to={`/practiceAria/usertype/${string}`}>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Confirm
        </button>
      </Link>

      <h1 className="text-lg">Your old search result</h1>
      <p className="text-lg">{userOldResults}</p>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default UserInput;
