import React, { useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import NotFoundPage from "./NotFoundPage";
import Footer from "./Footer";
import ProductDetails from "./ProductDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  const [cartDetail , setCartDetail] = useState({})


  function handelAddTocart(productId , ProductValue){
    
       const oldValue = cartDetail[productId] || 0 ;
    setCartDetail({...cartDetail ,[productId] : oldValue + ProductValue  });


    console.log(cartDetail , 'cartDetail' , productId , 'productId' , ProductValue)
  
  }

  return (
    <div className="bg-gray-200 h-screen overflow-auto flex flex-col">
      <Header></Header>
      <div className="grow">
        <Routes>
          <Route index path="/" element={<ProductList></ProductList>}></Route>

          <Route
            path="/Product/:id/details"
            element={<ProductDetails onCartbuttonClick={handelAddTocart} />}
          ></Route>

          <Route path="*" element={<NotFoundPage></NotFoundPage>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
