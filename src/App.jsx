import React, { useState } from "react";
import AppLogic from "./AppLogic";
import ColorPicker from "./ColorPicker";
import MobileManu from "./MobileManu";
import { createContext } from "react";



   export const ResetEverything = createContext();
const App = () => {
  const [bgColor, setBgColor] = useState("gray");

 const handleReset = () => {
   setInputText("");
   setWordsTyped(0);
   setCorrectWords(0);
   setIncorrectWords(0);
   localStorage.removeItem("inputText");
 };
  return (
    
  
    <div
      className="h-screen w-screen overflow-auto relative  "
      style={{ backgroundColor: bgColor }}
    >
      <ResetEverything.Provider value={handleReset} >
          <MobileManu></MobileManu>
      <AppLogic></AppLogic>
      </ResetEverything.Provider>
    </div>
    
  );
};

export default App;
