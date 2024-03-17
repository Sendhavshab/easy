import React from "react";
import NextWordShow from "./NextWordShow";

const TypingBox = ({
  value,
  onChange,
  setShowBackspaceMessage,
  inputText,
  userWord,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      console.log("Backspace");
      event.preventDefault();
      setShowBackspaceMessage(true);
      setTimeout(() => {
        setShowBackspaceMessage(false);
      }, 3000);
    }
  };

  return (
    <div className="fixed flex flex-col items-center w-10/12  md:sticky bottom-2">
      <NextWordShow inputText={inputText} userWord={userWord} />
      <textarea
        className=" my-2 w-full   md:min-h-32 max-h-48 border-4 border-gray-300 rounded-xl resize-none p-2"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="Start typing..."
      />
    </div>
  );
};

export default TypingBox;
