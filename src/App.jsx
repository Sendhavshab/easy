import React, { createContext, useEffect, useMemo, useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import NotFoundPage from "./handleError/NotFoundPage";
import Footer from "./FooterCom";
import ProductDetails from "./ProductDetail";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Cart/CartPage";
import LogInPage from "./Acount/LogIn";
import SignUpPage from "./Acount/SignUp";
import MobileManu from "./MobileManu";
import { GetUser, accountServerDataSender } from "./ServerData";
import RedirectLogin, { RedirectHome } from "./Redirect";
import Loader from "./handleError/Loader";
import Profile from "./Profile";
import AlertShow from "./handleError/AlertShow";
import { inRange } from "lodash";
 
export const AddTocartContext = createContext();
export const UserAccount = createContext();
function App() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [DataNotFound, SetDataNotFound] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [UserLoading, setUserLoading] = useState(true);
  const [isAlert, setIsAlert] = useState(0);

  const jSonFormat = useMemo(function () {
    const localCartNum = localStorage.getItem("my-cart") || "{}";
    return JSON.parse(localCartNum);
  });
  useEffect(() => {
    if (token) {
      GetUser(token)
        .then((responce) => {
          setUser(responce.data);
          setUserLoading(false);
        })
        .catch((err) => {
          console.log(err);
          if (err.message === "Request failed with status code 401") {
            localStorage.removeItem("token");

            setUserLoading(false);
          } else if (err.message === "Network Error") {
            SetDataNotFound(true);
          }
        });
    } else {
      setUserLoading(false);
    }
  }, []);

  const [cartDetail, setCartDetail] = useState(jSonFormat);

  const UserAccountAPICaller = (userData) => {
    setLoading(true);
    accountServerDataSender(userData)
      .then((responce) => {
        const user = responce;
        setUser(user);
        setLoading(false);
      })
      .catch((err) => {
        console.log("app me error", err);
        if (err.message === "Network Error") {
          setIsAlert(isAlert + 1);
        }
        setLoading(false);
      });
  };
  const accountObj = {
    UserAccountAPICaller,
    user,
    setUser,
  };

  function handelAddTocart(productId, ProductValue, doNotPlus) {
    let cart;
    if (ProductValue === -1) {
      cart = { ...cartDetail };
      delete cart[productId];
      setCartDetail(cart);
    } else {
      const oldValue = doNotPlus ? 0 : cartDetail[productId] || 0;
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

  if (DataNotFound) {
    return <NotFoundPage />;
  }

  if (UserLoading) {
    return <Loader></Loader>;
  }
  console.log("inRange(isAlert)", [...Array(10).keys()] , isAlert);
  return (
    <div className="bg-gray-200 h-screen overflow-auto flex flex-col">
      {Loading && <Loader></Loader>}
      {isAlert !== 0 && (
        <div className="absolute flex flex-col top-3 right-3">
          {[...Array(isAlert).keys()].map((i) => {
       return   <AlertShow key={i} type="error" setIsAlert={setIsAlert}>
              Login Error check internet connection
            </AlertShow>;
          })}
        </div>
      )}
      <UserAccount.Provider value={accountObj}>
        <AddTocartContext.Provider value={contextValue}>
          <Header ProductsValue={cartProductsValue}></Header>

          <MobileManu ProductsValue={cartProductsValue}></MobileManu>

          <div className="grow ">
            <Routes>
              <Route
                path="/login"
                element={
                  <RedirectHome>
                    <LogInPage></LogInPage>
                  </RedirectHome>
                }
              ></Route>
              <Route
                path="/signup"
                element={
                  <RedirectHome>
                    <SignUpPage></SignUpPage>
                  </RedirectHome>
                }
              ></Route>
              <Route
                index
                element={
                  <RedirectLogin>
                    <ProductList></ProductList>
                  </RedirectLogin>
                }
              ></Route>
              <Route
                path="/Product/:id/details"
                element={
                  <RedirectLogin>
                    <ProductDetails />
                  </RedirectLogin>
                }
              ></Route>
              <Route
                path="/mycart"
                element={
                  <RedirectLogin>
                    {" "}
                    <CartPage cartDetail={cartDetail} />
                  </RedirectLogin>
                }
              />
              <Route path="/myprofile" element={<Profile />} />
              <Route path="*" element={<NotFoundPage></NotFoundPage>} />
            </Routes>
          </div>
          <Footer />
        </AddTocartContext.Provider>
      </UserAccount.Provider>
    </div>
  );
}

export default App;
