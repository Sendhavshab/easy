import React, { useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";

import Footer from "./Footer";
import ProductDetails from "./ProductDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-200 h-screen overflow-scroll flex flex-col">
      <Header></Header>

      <Routes>
        <Route index path="/" element={<ProductList></ProductList>}></Route>

        <Route path="/Product/:id/details" element={<ProductDetails />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
