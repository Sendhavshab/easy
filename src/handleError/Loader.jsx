import React, { memo } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiLoader } from "react-icons/fi";
import { Link } from "react-router-dom";

function Loader({arrow}){
 return (
   <div className=" flex cursor-progress fixed bg-black bg-opacity-40 inset-0 flex-col items-center h-screen justify-center">
    { arrow && <Link to="/">
       <IoMdArrowRoundBack size={39} className="fixed left-3 top-16" />
     </Link>}
     <div className="w-screen  flex items-center justify-center">
       <FiLoader className="animate-pulse h-6 w-6" />
     </div>
   </div>
 );
}

export default memo(Loader);