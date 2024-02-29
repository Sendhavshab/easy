import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import { items } from "./Data";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-gray-200  h-screen overflow-auto ">
      <Header></Header>
      <ProductList param={items}></ProductList>
      <Footer />
    </div>
  );
}

export default App;
