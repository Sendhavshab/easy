import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import { items } from "./Data";
import Footer from "./Footer";
import ProductDetails from "./ProductDetail";

function App() {
  return (
    <div className="bg-gray-200  h-screen overflow-auto ">
      <Header></Header>
      <ProductList allItems={items}></ProductList>
      <Footer />
      
    </div>
  );
}

export default App;
