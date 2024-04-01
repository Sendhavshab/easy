import React, { useContext, useState, useCallback, useEffect } from "react";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";
import CustomBTNFour from "../Button/ButtonFour";
import { AddTocartContext } from "../App";
import CartItemRemover from "./CartItemRemover";
import AlertShow from "../handleError/AlertShow";
import AlertList from "../handleError/AlertList";

const CartCountChange = ({ id, productValue }) => {
  const { handelAddTocart } = useContext(AddTocartContext);
  const [showCartItemAdded, setShowCartItemAdded] = useState(false);
  const [CartInputvalue, setCartInputvalue] = useState();
 

  useEffect(() => {
    setCartInputvalue(productValue || 1);
  }, [productValue]);

  const handelCartProductAdd = function () {
    handelAddTocart(id, CartInputvalue);
    setShowCartItemAdded(true);
    setTimeout(function () {
      setShowCartItemAdded(false);
    }, 2000);
  };
  function HandleInputPlusClick() {
    let changToNum = +(CartInputvalue + 1);

    if (changToNum !== 11) {
      setCartInputvalue(changToNum);
    }
    if (productValue) {
      handelAddTocart(id, changToNum, true);
    }
  }
  function HandleInputMinusClick() {
    let changToNum = CartInputvalue - 1;

    if (changToNum !== 0) {
      setCartInputvalue(changToNum);
    }
    if (productValue) {
      handelAddTocart(id, changToNum, true);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center  my-6 ">
        <button className="m-2">
          {CartInputvalue == 1 && productValue ? (
            <CartItemRemover callByCountChange={true} id={id} />
          ) : (
            <HiOutlineMinusCircle
              onClick={HandleInputMinusClick}
              className="w-5 h-5 rounded-full hover:bg-black border hover:text-white "
            />
          )}
        </button>
        <p className="w-10 inline-block text-center h-10 mx-4 border-2 border-black rounded-2xl font-bold">
          {CartInputvalue}
        </p>
        <button className="m-2" onClick={HandleInputPlusClick}>
          <HiOutlinePlusCircle className="w-5 h-5 rounded-full hover:bg-black border hover:text-white " />
        </button>
      </div>
      {productValue == undefined && (
        <CustomBTNFour
          onClick={handelCartProductAdd}
          className="rounded-2xl px-2 block  md:inline-block mt-4 md:m-0 "
          disabled={showCartItemAdded}
        >
          Add to cart
        </CustomBTNFour>
      )}
      {showCartItemAdded && (
        <AlertList howMuch="1" type="success">
          added to cart Successfully!
        </AlertList>
      )}
    </div>
  );
};

export default CartCountChange;
