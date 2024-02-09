import React from "react";

const TypingBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Start typing..."
    />
  );
};

export default TypingBox;
