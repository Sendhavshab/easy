import React, { createContext, useMemo, useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import NotFoundPage from "./handleError/NotFoundPage";
import Footer from "./FooterComponent";
import ProductDetails from "./ProductDetail";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Cart/CartPage";
import LogInPage from "./Acount/LogIn";
import SignUpPage from "./Acount/SignUp";
import MobileManu from "./MobileManu";

export const AddTocartContext = createContext();

function App() {
  const jSonFormat = useMemo(function () {
    const localCartNum = localStorage.getItem("my-cart") || "{}";
    return JSON.parse(localCartNum);
  });

  const [cartDetail, setCartDetail] = useState(jSonFormat);

  function handelAddTocart(productId, ProductValue) {
 let cart;
     if(ProductValue === -1){
        cart = {...cartDetail};
        delete cart[productId];
        setCartDetail(cart);

     }else{
       const oldValue = cartDetail[productId] || 0;
    cart = { ...cartDetail, [productId]: oldValue + ProductValue };
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
  
  const contextValue = useMemo(
    () => ({
      cartDetail,
      handelAddTocart,
    }),
    [cartDetail, handelAddTocart]
  );
  console.log('cart detail changed to' , cartDetail)
  return (
    <div className="bg-gray-200 h-screen overflow-auto flex flex-col">
      <AddTocartContext.Provider value={contextValue} >
        <Header ProductsValue={cartProductsValue}></Header>
        <MobileManu ProductsValue={cartProductsValue}></MobileManu>
        <div className="grow ">
          <Routes>
            <Route
              index
              path="/login"
              element={<LogInPage></LogInPage>}
            ></Route>
            <Route
              index
              path="/signup"
              element={<SignUpPage></SignUpPage>}
            ></Route>
            <Route index path="/" element={<ProductList></ProductList>}></Route>
            <Route
              path="/Product/:id/details"
              element={<ProductDetails />}
            ></Route>
            <Route
              path="/mycart"
              element={<CartPage cartDetail={cartDetail} />}
            />
            <Route path="*" element={<NotFoundPage></NotFoundPage>} />
          </Routes>
        </div>
        <Footer />
      </AddTocartContext.Provider>
    </div>
  );
}

export default App;
