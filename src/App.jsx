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



function App() {
  const [Loading, setLoading] = useState(false);


  

  return (
    <div className="bg-gray-200 ">
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
                 
                    <ProductList></ProductList>
                
                }
              ></Route>
              <Route
                path="/Product/:id/details"
                element={
                    <ProductDetails />
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
