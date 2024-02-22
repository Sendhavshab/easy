import React, { useState, useEffect } from "react";

const UserInput = ({ func, setI }) => {
  const [inputValue, setInputValue] = useState("");
  const [userWords, setUserWords] = useState("");

  useEffect(() => {
    const storedUserWords = localStorage.getItem("userWords");
    if (storedUserWords) {
      setUserWords(storedUserWords);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userWords", userWords);
  }, [userWords]);

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
    <div>
      <input
        id="subjectInput"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter word"
      />
      <button onClick={handleAddWord}>Add Word</button>
      <p>{userWords}</p>
      <button onClick={confirmBtn}>Confirm</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default UserInput;
