import React, { useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import NotFoundPage from "./NotFoundPage";
import Footer from "./Footer";
import ProductDetails from "./ProductDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-200 h-screen overflow-auto flex flex-col">
      <Header></Header>
      <div className="grow">
        <Routes>
          <Route index path="/" element={<ProductList></ProductList>}></Route>

          <Route
            path="/Product/:id/details"
            element={<ProductDetails />}
          ></Route>

          <Route path="*" element={<NotFoundPage></NotFoundPage>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
