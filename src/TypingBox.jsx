import React from "react";

const TypingBox = ({ value, onChange }) => {
  return (
    <textarea
      className="w-9/12 min-h-28 max-h-36 border-4 border-green-400 rounded-xl border-solid fixed bottom-5 mr-2"
      type="text"
      value={value}
      onChange={onChange}
    >
      Start typing...
    </textarea>
  );
};

export default TypingBox;
