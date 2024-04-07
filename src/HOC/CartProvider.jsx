import React, { useMemo, useState } from "react";
import { AddTocartContext } from "./Context";


const CartProvider = ({children}) => {

const jSonFormat = useMemo(function () {
    const localCartNum = localStorage.getItem("my-cart") || "{}";
    return JSON.parse(localCartNum);
  });
 

  const [cartDetail, setCartDetail] = useState(jSonFormat);

 

  function handelAddTocart(productId, ProductValue, doNotPlus) {
    let cart;
    if (ProductValue === -1) {
      cart = { ...cartDetail };
      delete cart[productId];
      setCartDetail(cart);
    } else {
      const oldValue = doNotPlus ? 0 : cartDetail[productId] || 0;
      cart = { ...cartDetail, [productId]: oldValue + +ProductValue };
      setCartDetail(cart);
    }
    const stringFromat = JSON.stringify(cart);
    localStorage.setItem("my-cart", stringFromat);
  }

  const cartProductsValue = useMemo(
    function () {
      const a = Object.keys(cartDetail).reduce(function (result, key) {
        return cartDetail[key] + result;
      }, 0);
      return a;
    },
    [cartDetail]
  );



  return (
     <AddTocartContext.Provider value={{
      cartDetail,
      handelAddTocart,
      cartProductsValue
      
    }}>{children}</AddTocartContext.Provider>
  );
};

export default CartProvider;