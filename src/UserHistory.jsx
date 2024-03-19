import React, { useState, useEffect } from "react";
import CustomBTNthree from "./Button/ButtonThree";
import { Link } from "react-router-dom";
function UserHistory(param) {
  const [UserOldInput, setUserOldInput] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const storedInputText = localStorage.getItem("inputText");
    if (storedInputText) {
      setUserOldInput(storedInputText);
    }
  }, []);

  useEffect(() => {
    const storedInputText = localStorage.getItem("inputText");
    if (storedInputText) {
      setUserOldInput(storedInputText);
    }
  }, []);

  let oldInput;
  if (UserOldInput !== "") {
    if (UserOldInput.length > 5) {
      oldInput = (
        <>
          {showAll && (
            <button
              className="text-blue-600 font-bold hover:text-indigo-800"
              onClick={() => setShowAll(!showAll)}
            >
              Show Less
            </button>
          )}
          <p className=" font-black text-xl text-center px-4">
            Your old input is:{" "}
            {showAll ? UserOldInput : UserOldInput.substring(0, 5) + "..."}{" "}
          </p>
          <button
            className="text-blue-600 font-bold hover:text-indigo-800"
            onClick={() => setShowAll(!showAll)}
          >
            Show {showAll ? "Less" : "More"}
          </button>
        </>
      );
    } else {
      oldInput = (
        <p className=" font-black text-2xl text-center px-4">
          Your old input is: {UserOldInput}
        </p>
      );
    }
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(UserOldInput);
    setCopySuccess(true);
  };
  return (
    <div className={` ${param.mainDivClass}`}>
      <div className="mt-4">
        {copySuccess && <p>Copied!</p>}
        {oldInput ? (
          <CustomBTNthree onClick={handleCopyClick}>Copy</CustomBTNthree>
        ) : (
          <div className="flex flex-col md:hidden gap-4 items-center">
            <p className=" font-black text-2xl text-center px-4">
              Sorry for the trouble but we don't save long time history
            </p>
            <Link to="/">
              <CustomBTNthree>GO HOME</CustomBTNthree>
            </Link>
          </div>
        )}
        <div className="bg-white"> {oldInput}</div>
      </div>
    </div>
  );
}

export default UserHistory;
