import React from "react";
import CustomBTNOne from "./Button/ButtonOne";
import CustomBTNTwo from "./Button/Buttontwo";
import { Link } from "react-router-dom";
import { useState } from "react";
import PracticeAria from "./PracticeAria";

const objact = {
  lavel1: ["asdf", ";lkj"],
  lavel2: ["asdfgf", ";lkjhj"],
  lavel3: [
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
    "daldar;",
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
};

export function CallLavelByPracticeAria(Lavel) {
  console.log("dfghjyhhhhhhh", objact[Lavel]);
  return objact[Lavel];
}

function LavelsComponent({ func }) {
  console.log("lavel runnign");

  const { lavel1, lavel2, lavel3 } = objact;

  function LavelOne() {
    func(lavel1);
  }
  function LavelTwo() {
    func(lavel2);
  }
  function HomeRow() {
    func(lavel3);
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Link to="/">
        <CustomBTNOne>MANUALY TYPE WORDS</CustomBTNOne>
      </Link>

      <div>
        <div>
          <Link to="/practicearia/lavel1/practice">
            <CustomBTNTwo onClick={LavelOne}>Lavel 1 - asdf ;lkj</CustomBTNTwo>
          </Link>
          <Link to="/practicearia/lavel2/practice">
            <CustomBTNTwo onClick={LavelTwo}>
              Lavel 2 - asdfgf ;lkjhj
            </CustomBTNTwo>
          </Link>
          <Link to="/practicearia/lavel3/practice">
            <CustomBTNTwo onClick={HomeRow}>
              Lavel 3 - HOME ROW PRACTICE
            </CustomBTNTwo>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LavelsComponent;
