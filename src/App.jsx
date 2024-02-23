import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import { items } from "./items";

function App() {
  return (
    <div className="bg-gray-100 p-2">
      <Header></Header>
      <ProductList param={items}></ProductList>
    </div>
  );
}

export default App;
     