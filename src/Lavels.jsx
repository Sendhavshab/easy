import React, { useEffect } from "react";
import CustomBTNOne from "./Button/ButtonOne";
import { useState } from "react";
import CustomBTNTwo from "./Button/Buttontwo";


function LavelsComponent({ func, showBtn, setShowBtn , setI ,I }) {
    
    const [custemButtonChildren , setCustemButtonChildren] = useState("PRACTICE BY LAVELS")
    
 
  function ShowLavels() {
    setShowBtn(!showBtn);

  }
useEffect( function (){
  if (showBtn) {
    setCustemButtonChildren("TYPE BY INPUT");
  } else if (!showBtn) {
    setCustemButtonChildren("PRACTICE BY LAVELS");
  }
}
  ,[showBtn , I])

function LavelOne() {
 
    
func(['asdf', ';lkj'])
setI(true)

}
function LavelTwo() {
  func(["asdfgf", ";lkjhj"]);
  setI(true);
}
function HomeRow() {
  func([
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
  ]);
  setI(true);
}
  return (
    <div>
      <CustomBTNOne onClick={ShowLavels}>{custemButtonChildren}</CustomBTNOne>
      {showBtn === true ? (
        <div>
          <div>
            <CustomBTNTwo onClick={LavelOne}>Lavel 1 - asdf ;lkj</CustomBTNTwo>
            <CustomBTNTwo onClick={LavelTwo}>
              Lavel 2 - asdfgf ;lkjhj
            </CustomBTNTwo>
            <CustomBTNTwo onClick={HomeRow}>
              Lavel 3 - HOME ROW PRACTICE
            </CustomBTNTwo>
          </div>
        </div>
      ) : (
        true
      )}
    </div>
  );
}

export default LavelsComponent;