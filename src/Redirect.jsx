import React from "react";
import { Navigate } from "react-router-dom";
// import { UserAccountContextHOC } from "./App";
import {  UserProviderHOC } from "./HOC/Context";

const RedirectLogin = ({ children ,user  }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default UserProviderHOC(RedirectLogin);

const p = ({ children  , user}) => {

  if (user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

  export const RedirectHome   =  UserProviderHOC(p) ;