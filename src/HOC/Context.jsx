import { createContext } from "react";
import HocCreater from "./HocCreater";

export const AddTocartContext = createContext();
export const UserAccount = createContext();


 export const UserProviderHOC = HocCreater(UserAccount);
 export const CartProviderHOC = HocCreater(AddTocartContext)

 