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
import AlertList from "./handleError/AlertList";
import { AddTocartContext, UserAccount } from "./HOC/Context";
import HocCreater from "./HOC/HocCreater";
import UserProvider from "./HOC/UserProvider";
import CartProvider from "./HOC/CartProvider";



  // export const UserAccountContextHOC  = HocCreater(UserAccount)
function App() {
  const [Loading, setLoading] = useState(false);
  // const [isAlert, setIsAlert] = useState({
  //   Alert: 0,
  //   message: "Login Error check internet connection",
  //   type: "error"
  // });

  

  return (
    <div className="bg-gray-200 h-screen overflow-auto flex flex-col">
      {Loading && <Loader></Loader>}
     
      <UserProvider setLoading={setLoading} >
        <CartProvider>
          <Header></Header>

          <MobileManu ></MobileManu>

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
                    <CartPage />
                  </RedirectLogin>
                }
              />
              <Route path="/myprofile" element={<Profile />} />
              <Route path="*" element={<NotFoundPage></NotFoundPage>} />
            </Routes>
          </div>
          <Footer />
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
