import React, { useEffect, useState } from "react";
import Product from "./Product";
import { GetProductList } from "./ServerData";
import { FiLoader } from "react-icons/fi";

function ProductList() {
  const [Query, SetQuery] = useState("");
  const [sort, setsort] = useState("default");
  const [allItems, SetAllItems] = useState([]);

  useEffect(function () {
    const data = GetProductList();

    data.then((responce) => {
      SetAllItems(responce.data.products);
      console.log("rsponce is ", responce.data.products);
    });
  }, []);

  const param = allItems.filter(function (item) {
    return (
      item.title.toLowerCase().indexOf(Query.toLowerCase()) !== -1 ||
      item.category.toLowerCase().indexOf(Query.toLowerCase()) !== -1
    );
  });
  if (sort === "Name") {
    param.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "low to high") {
    param.sort((a, b) => a.price - b.price);
  } else if (sort === "high to low") {
    param.sort((a, b) => b.price - a.price);
  } else if (sort === "category") {
    param.sort((a, b) => a.category.localeCompare(b.category));
  }

  function HandleSearchInputChange(event) {
    SetQuery(event.target.value);
  }
  function HandleSelectChange(event) {
    setsort(event.target.value);
  }

  if (allItems.length == 0) {
    return (
      <div className="w-screen h-2/3 flex items-center justify-center">
        <FiLoader className="animate-pulse h-6 w-6" />
      </div>
    );
  }
  return (
    <div className="lg:px-10 ">
      <div className="md:bg-gray-100">
        <input
          placeholder="search"
          className="border-2 border-gray-600 rounded-md md:rounded-xl w-20 md:w-40 px-3 md:py-1 hover:transform hover:scale-105 transition duration-300 ease-in-out m-2"
          value={Query}
          onChange={HandleSearchInputChange}
        />
        <select
          onChange={HandleSelectChange}
          value={sort}
          className="bg-gray-600 text-white rounded-lg   w-20 md:w-40 p-1 m-2 hover:transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <option value={"Name"}>Sort by Name</option>
          <option value={"low to high"}>Sort by price: low to high</option>
          <option value={"high to low"}> Sort by price: high to low</option>
          <option value={"default"}> default Filter</option>
          <option value={"category"}>Sort by category </option>
        </select>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5   py-6 px-5 ">
          {param.map(function (items, index) {
            return <Product items={items} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default ProductList;
