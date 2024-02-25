import React from "react";
import CustomBTNOne from "./Button/ButtonOne";
import { useState } from "react";
import CustomBTNTwo from "./Button/Buttontwo";


function LavelsComponent({ func, showBtn, setShowBtn , setI }) {
    
    const [custemButtonChildren , setcCustemButtonChildren] = useState("PRACTICE BY LAVELS")
    const[bysequence ,setSequence] = useState(false)

  function ShowLavels() {
    setShowBtn(!showBtn);
 if(custemButtonChildren == "PRACTICE BY LAVELS"){
    setcCustemButtonChildren("TYPE BY INPUT");
 }else{
    setcCustemButtonChildren("PRACTICE BY LAVELS");
 }
  }


function LavelOne() {
 
    
func(['asdf', ';lkj'])
setI(true)

}
function LavelTwo() {
  func(["asdfgf", ";lkjhj"]);
  setI(true);
}
  return (
    <div>
      <CustomBTNOne onClick={ShowLavels}>{custemButtonChildren}</CustomBTNOne>
      {showBtn === true ? (
        <div>
          <CustomBTNTwo func={setSequence} onClick={LavelOne}>
            Lavel 1 - asdf ;lkj
          </CustomBTNTwo>
          <CustomBTNTwo func={setSequence} onClick={LavelTwo}>
            Lavel 2 - asdfgf ;lkjhj
          </CustomBTNTwo>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default LavelsComponent;