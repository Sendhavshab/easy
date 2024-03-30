import React, { useContext } from "react";
import { UserAccount } from "./App";
import { Navigate } from "react-router-dom";

const RedirectLogin = ({ children }) => {
  const { user } = useContext(UserAccount);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default RedirectLogin;

export const RedirectHome = ({ children }) => {
  const { user } = useContext(UserAccount);

  if (user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};
