import React, { useState } from "react";
import CustomBTNfour from "./Button/ButtonFour"
function ColorPicker({setBgColor}) {
  const [inputColor, setInputColor] = useState("gray");

  const handleChange = (e) => {
    setInputColor(e.target.value);
  };

  const handleButtonClick = () => {
    setBgColor(inputColor);
    setInputColor("gray")
  };

  return (
    <div className="absolute right-0">
     
      <input
        type="text"
        placeholder="change bg colour"
        value={inputColor}
        onChange={handleChange}
        className="border border-gray-400 p-2 rounded-md m-2"
      />
      <CustomBTNfour
        onClick={handleButtonClick}
        
      >
        Change Color
      </CustomBTNfour>
    </div>
  );
}

export default ColorPicker;
