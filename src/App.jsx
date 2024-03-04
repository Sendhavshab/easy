import React, { useState } from "react";
import AppLogic from "./AppLogic";
import ColorPicker from "./ColorPicker";
const App = () => {
  const [bgColor, setBgColor] = useState("gray");

  return (
    <div
      className="h-screen w-screen overflow-auto relative  "
      style={{ backgroundColor: bgColor }}
    >
      <AppLogic></AppLogic>
    </div>
  );
};

export default App;
