import React, { useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import { items } from "./Data";
import Footer from "./Footer";
import ProductDetails from "./ProductDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  console.log("App component");
  const [id, setid] = useState("8");
  const [DataChanger, setdataChanger] = useState(false);
  console.log("items id is", items[0].id);
  const path = window.location.pathname;
  console.log("path is", path);
  const object = {
    "/Product/8": items[0].id,
    "/Product/12": items[1].id,
    "/Product/10": items[2].id,
    "/Product/9": items[3].id,
    "/Product/11": items[4].id,
  };
  if (path !== "/Product" && path !== "/") {
    console.log("if running " + path);
    if (object[path] !== id) {
      setid(object[path]);
    }
  }

  console.log("upar vali id is", id);
  return (
    <div className="bg-gray-200 h-screen overflow-auto ">
     
      <Header></Header>
      
        <Routes>
          <Route
            index
            path="/"
            element={
              <ProductList
                setdataChanger={setdataChanger}
                allItems={items}
              ></ProductList>
            }
          ></Route>
      
          <Route
            path={`/Product/${id}`}
            element={<ProductDetails param={items} id={id} />}
          ></Route>
        </Routes>
      

      <Footer />
    </div>
  );
}

export default App;
