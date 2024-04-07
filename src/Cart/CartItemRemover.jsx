import React, { useContext, useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { TiDeleteOutline } from "react-icons/ti";
import { AddTocartContext } from "../HOC/Context";

const CartItemRemover = ({ id , callByCountChange }) => {
  const { handelAddTocart } = useContext(AddTocartContext);
  const [PopUp, setPopUp] = useState(false);

  const handleCrossClick = () => {
    setPopUp(true);
  };
  const InfoYesClick = () => {
    handelAddTocart(id, -1);
    setPopUp(false);
    
  };

  const InfoNoClick = () => {
    setPopUp(false);
  };


  if(callByCountChange){
    
       return (
         <TiDeleteOutline
           title="Remove item"
           onClick={InfoYesClick}
           className="w-5 h-5 rounded-full hover:bg-black border hover:text-white "
         />
       );
  }




  return (
    <div className="absolute sm:static -inset-y-5 inset-x-full ">
      <div>
        <GiCrossMark
          title="Remove item"
          className="cursor-pointer absolute sm:static right-1"
          onClick={handleCrossClick}
        />
      </div>
      {PopUp && (
        <div className="flex justify-center bg-black bg-opacity-30 items-center fixed inset-0">
          <div className="aspect-video border border-inherit bg-white relative shadow-black shadow-lg sm:w-3/6 p- w-4/6 2xl:max-w-md lg:w-2/6 rounded-xl">
            <h2 className="font-bold  text-center text-xl  p-2 md:text-3xl lg:text-2xl xl:text-3xl md:font-black">
              Do you want to remove the item from the cart?
            </h2>
            <div className=" absolute bottom-0 w-full  flex justify-evenly ">
              <button
                onClick={InfoNoClick}
                className="w-1/3 font-bold sm:mb-3 hover:bg-blue-600 bg-blue-500 hover:scale-110  rounded-full"
              >
                No!
              </button>
              <button
                onClick={InfoYesClick}
                className="w-1/3 font-bold sm:mb-3 border-2 border-blue-500 hover:bg-blue-400 hover:scale-90 rounded-full "
              >
                Yes!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItemRemover;
