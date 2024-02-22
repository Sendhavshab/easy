import React, { useState, useEffect } from "react";

const UserInput = ({ func, setI }) => {
  const [inputValue, setInputValue] = useState("");
  const [userWords, setUserWords] = useState("");
  const [userOldResults, setUserOldResults] = useState("");

  useEffect(() => {
    const storedUserWords = localStorage.getItem("userWords");
    if (storedUserWords) {
      setUserWords(storedUserWords);
      setUserOldResults(storedUserWords); // Set initial value for userOldResults as well
    }
  }, []); // Run once on mount

  useEffect(() => {
    localStorage.setItem("userWords", userWords);
  }, [userWords]); // Update local storage whenever userWords changes

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const confirmBtn = () => {
    setI(1);
  };

  const handleAddWord = () => {
    const updatedWords = userWords ? userWords + ", " + inputValue : inputValue;
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
      <input
        className="border border-gray-300 rounded-md px-3 py-2"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter word"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleAddWord}
      >
        Add Word
      </button>
      <p className="text-lg">User Words: {userWords}</p>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        onClick={confirmBtn}
      >
        Confirm
      </button>
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
