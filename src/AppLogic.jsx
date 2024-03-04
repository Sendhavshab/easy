import React, { useState, useEffect } from "react";
import UserInput from "./UserInput";
import { Routes, Route } from "react-router-dom";
import LavelsComponent from "./Lavels";
import PracticeAria from "./PracticeAria";
const AppLogic = () => {
  const [userWord, setUserWord] = useState([]);
  const [UserOldInput, setUserOldInput] = useState("");

  
  useEffect(() => {
    const storedInputText = localStorage.getItem("inputText");
    if (storedInputText) {
      setUserOldInput(storedInputText);
    }
  }, []);

  const result = userWord.map((word, index) => {
    if (index !== 0) {
      return <>{` ${word}`}</>;
    } else {
      return <>{word}</>;
    }
  });

  return (
    <div>
      <Routes>
        <Route
          index
          element={<UserInput func={setUserWord} result={result}></UserInput>}
        />
        <Route
          path="/lavels"
          element={<LavelsComponent func={setUserWord} />}
        />
        <Route
          path="/practicearia/:lavel/:userinput"
          element={
            <PracticeAria
              userWord={userWord}
              result={result}
              func={setUserWord}
            ></PracticeAria>
          }
        />
      </Routes>
    </div>
  );
};

export default AppLogic;
