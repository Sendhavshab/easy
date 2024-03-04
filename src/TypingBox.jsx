import React from "react";

const TypingBox = ({ value, onChange, setShowBackspaceMessage }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      console.log("Backspace")
      event.preventDefault();
      setShowBackspaceMessage(true);
      setTimeout(() => {
        setShowBackspaceMessage(false);
      }, 2000);
    }
  };

  return (
    <textarea
      className="w-10/12 my-2 sticky bottom-2 min-h-32 max-h-48 border-4 border-gray-300 rounded-xl resize-none p-2"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      placeholder="Start typing..."
    />
  );
};

export default TypingBox;
