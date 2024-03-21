import React, { useContext, useState, useCallback } from "react";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";
import CustomBTNFour from "../Button/ButtonFour";
import { AddTocartContext } from "../App";

const CartCountChange = ({ id }) => {
  const {handelAddTocart} = useContext(AddTocartContext);

  const [showCartItemAdded, setShowCartItemAdded] = useState(false);
  const [CartInputvalue, setCartInputvalue] = useState(1);

  const handelCartBtnchange = useCallback(
    function () {
      handelAddTocart(id, CartInputvalue);
      setShowCartItemAdded(true);
      setTimeout(function () {
        setShowCartItemAdded(false);
      }, 2000);
    },
    [CartInputvalue]
  );

  function HandleInputPlusClick() {
    let changToNum = CartInputvalue + 1;

    if (changToNum !== 11) {
      setCartInputvalue(changToNum);
    }
  }
  function HandleInputMinusClick() {
    let changToNum = CartInputvalue - 1;

    if (changToNum !== 0) {
      setCartInputvalue(changToNum);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center  my-6 ">
        <button className="m-2" onClick={HandleInputMinusClick}>
          <HiOutlineMinusCircle className="w-5 h-5 rounded-full hover:bg-black border hover:text-white " />
        </button>
        <p className="w-10 inline-block text-center h-10 mx-4 border-2 border-black rounded-2xl font-bold">
          {CartInputvalue}
        </p>
        <button className="m-2" onClick={HandleInputPlusClick}>
          <HiOutlinePlusCircle className="w-5 h-5 rounded-full hover:bg-black border hover:text-white " />
        </button>
      </div>
      <CustomBTNFour
        onClick={handelCartBtnchange}
        className="rounded-2xl px-2 block  md:inline-block mt-4 md:m-0 "
        disabled={showCartItemAdded}
      >
        Add to cart
      </CustomBTNFour>
      {showCartItemAdded && (
        <p className="bg-black text-slate-50 fixed text-center  right-auto bottom-28 z-20 ">
          added to cart Successfully!
        </p>
      )}
    </div>
  );
};

export default CartCountChange;
