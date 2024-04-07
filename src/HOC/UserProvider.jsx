import React, {  useEffect, useState } from "react";
import { GetUser, accountServerDataSender } from "../ServerData";
import Loader from "../handleError/Loader";
import NotFoundPage from "../handleError/NotFoundPage";
import { UserAccount } from "./Context";
import AlertList from "../handleError/AlertList";


const UserProvider = ({children , setLoading}) => {

  const token = localStorage.getItem("token");
    
  const [user, setUser] = useState(null);
  const [UserLoading, setUserLoading] = useState(true);
  const [DataNotFound, SetDataNotFound] = useState(false);
 const [isAlert, setIsAlert] = useState({
    Alert: 0,
    message: "Login Error check internet connection",
    type: "error"
  });

 useEffect(() => {
    if (token) {
      GetUser(token)
        .then((responce) => {
          setUser(responce.data);
          setUserLoading(false);
        })
        .catch((err) => {
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


 const UserAccountAPICaller = (userData) => {
    setLoading(true);
    accountServerDataSender(userData)
      .then((responce) => {
        const user = responce;
        setUser(user);
        setLoading(false);
      })
      .catch((err) => {
        if (err.message === "Network Error") {
          setIsAlert({
            Alert: isAlert.Alert + 1,
            message: "Login Error check internet connection",
            type: "error",
          });
        } else if (err.response.status === 401) {
           setIsAlert({
             Alert: isAlert.Alert + 1,
             message: "Login Error check Email or password",
             type: "warning",
           });
        }
        setLoading(false);
      });}

if (UserLoading) {
    return <Loader></Loader>;
  }


  if (DataNotFound) {
    return <NotFoundPage />;
  }
  return (
         
  <div> <AlertList type={isAlert.type} howMuch={isAlert.Alert}>
        {isAlert.message}
      </AlertList>  <UserAccount.Provider value={{
    UserAccountAPICaller,
    user,
    setUser,
  }}>{children}</UserAccount.Provider></div>

  );
};

export default UserProvider;






