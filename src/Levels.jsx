import React from "react";
import CustomBTNOne from "./Button/ButtonOne";
import CustomBTNTwo from "./Button/Buttontwo";
import { Link } from "react-router-dom";

const objact = {
  level1: ["asdf", ";lkj"],
  level2: ["asdfgf", ";lkjhj"],
  level3: [
    "all;",
    "ash;",
    "ask;",
    "add;",
    "has;",
    "had;",
    "sad;",
    "lad;",
    "kad;",
    "lash;",
    "gas;",
    "glass;",
    "jag;",
    "fad;",
    "dad;",
    "dalda;",
    "sag;",
    "gad;",
    "gal;",
    "shad;",
    "fag;",
    "lag;",
    "dash;",
    "lash;",
    "jag;",
    "dag;",
    "gash;",
    "shag;",
    "shakal;",
    "jagl;",
    "salad;",
    "slag;",
    "flask;",
    "jagd;",
    "ladka;",
  ],
  level4: ["'all'", "'ash'", "'ask'", "'add'", "'kajal'"],
  level5: ["qwert", "poiuy", "trewq", "yuiop"],
};

export function CallLevelByPracticeAria(level) {
  return objact[level];
}

function LevelsComponent({ func }) {


  function showLevel(e) {
    const Level = e.target.getAttribute("id");

    func(objact[Level]);
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Link to="/">
        <CustomBTNOne>MANUALY TYPE WORDS</CustomBTNOne>
      </Link>

      <div className="flex flex-col items-center">
        <Link to="/practicearia/level1/practice">
          <CustomBTNTwo  onClick={showLevel} id="level1">Level 1 - asdf ;lkj</CustomBTNTwo>
        </Link>
        <Link to="/practicearia/level2/practice">
          <CustomBTNTwo onClick={showLevel} id="level2">Level 2 - asdfgf ;lkjhj</CustomBTNTwo>
        </Link>
        <Link to="/practicearia/level3/practice">
          <CustomBTNTwo onClick={showLevel} id="level3">Level 3 - HOME ROW PRACTICE</CustomBTNTwo>
        </Link>

        <Link to="/practicearia/level4/practice">
          <CustomBTNTwo onClick={showLevel} id="level4">Level 4 - FULL HOME ROW</CustomBTNTwo>
        </Link>
        <Link to="/practicearia/level5/practice">
          <CustomBTNTwo onClick={showLevel} id="level5">level 5 - UPPER ROW PRACTICE</CustomBTNTwo>
        </Link>
      </div>
    </div>
  );
}

export default LevelsComponent;
