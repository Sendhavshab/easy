import React, { useCallback, useMemo, useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import NotFoundPage from "./NotFoundPage";
import Footer from "./FooterComponent";
import ProductDetails from "./ProductDetail";
import { Route, Routes } from "react-router-dom";
import CartPage from "./CartPage";
import SignInPage from "./SignIn";
import SignUpPage from "./SignUp";
import MobileManu from "./MobileManu";

function App() {
  const jSonFormat = useMemo(function () {
    const localCartNum = localStorage.getItem("my-cart") || "{}";
    return JSON.parse(localCartNum);
  });

  const [cartDetail, setCartDetail] = useState(jSonFormat);

  function handelAddTocart(productId, ProductValue) {
    const oldValue = cartDetail[productId] || 0;
    const cart = { ...cartDetail, [productId]: oldValue + ProductValue };
    setCartDetail(cart);

    const stringFromat = JSON.stringify(cart);
    localStorage.setItem("my-cart", stringFromat);
    console.log(cartDetail, "cartDetail", productId, "productId", ProductValue);
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

  console.log(cartProductsValue);
  return (
    <div className="bg-gray-200 h-screen overflow-auto flex flex-col">
      <Header ProductsValue={cartProductsValue}></Header>
      <MobileManu ProductsValue={cartProductsValue}></MobileManu>
      <div className="grow ">
        <Routes>
          <Route
            index
            path="/signin"
            element={<SignInPage></SignInPage>}
          ></Route>
          <Route
            index
            path="/signup"
            element={<SignUpPage></SignUpPage>}
          ></Route>
          <Route index path="/" element={<ProductList></ProductList>}></Route>
          <Route
            path="/Product/:id/details"
            element={<ProductDetails onCartbuttonClick={handelAddTocart} />}
          ></Route>
          <Route
            path="/mycart"
            element={<CartPage cartDetail={cartDetail} />}
          />
          <Route path="*" element={<NotFoundPage></NotFoundPage>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
