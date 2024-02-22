import React from "react";

const TypingBox = ({ value, onChange }) => {
  return (
    <textarea
      className="w-10/12 min-h-32 max-h-48 border-4 border-gray-300 rounded-md resize-none p-2"
      value={value}
      onChange={onChange}
      placeholder="Start typing..."
    />
  );
};

export default TypingBox;
