import React, { useState, useEffect, createContext } from "react";
import UserInput from "./UserInput";
import { Routes, Route } from "react-router-dom";
import LavelsComponent from "./Lavels";
import PracticeAria from "./PracticeAria";
import UserHistory from "./UserHistory";



const AppLogic = () => {


  const [userWord, setUserWord] = useState([]);
  


  

 const result = userWord.map((word, index) => {
   if (index !== 0) {
     return <span key={index}>{` ${word}`}</span>;
   } else {
     return <span key={index}>{word}</span>;
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
          <Route path="/userhistory" element={<UserHistory />} />
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
