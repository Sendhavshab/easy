import React from "react";
import placeholderImage from "./placeholder.jpeg"


const PlaceholderProduct = ({children}) => {

 if(!+children){

    children = 1 ;
 }

  return (
    <div className="lg:px-10 max-w-7xl lg:m-auto pb-12 md:bg-gray-100">
  
  <div  className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5   py-6 px-5 "> {  [...Array(+children)].map((i , Index) => 
  <div key={Index}  className="bg-white animate-pulse max-w-md p-2 border rounded-md space-y-5 shadow-xl ">
        <div className=" w-full aspect-square">
          <img
            className="w-full h-full object-cover "
            src={placeholderImage}
            alt="loading"
          />
        </div>

        <h3 className=" h-4 w-3/5 bg-gray-300 ">
        </h3>
        <p className="  h-4 w-2/5 bg-gray-300">
       
        </p>
        <p className=" h-4 w-3/5 bg-gray-300  ">
        </p>
    </div>)}</div>
    </div>
    )
};

export default PlaceholderProduct;