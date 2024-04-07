import React, { useContext } from "react";
// import {UserAccount} from "../App"
const HocCreater = (context) => {

 return function xyz(IncomingComponent) {
    
   
   return function p(prop) {

 const value = useContext(context)
     return <IncomingComponent {...value} {...prop}></IncomingComponent>
    
   }

 }
 
};

export default HocCreater;