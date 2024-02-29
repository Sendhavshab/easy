import React from "react";
import { useState } from "react";
import Product from "./Product";
function ProductList({ allItems }) {
  const [Query, SetQuery] = useState("");
  const [sort, setsort] = useState("default");

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
  return (
    <div className="md:px-10 ">
      <div className="md:bg-slate-50">
        <input
          placeholder="search"
          className="border-2 border-gray-600 rounded-xl px-3 py-1 hover:transform hover:scale-105 transition duration-300 ease-in-out p-1 m-2"
          value={Query}
          onChange={HandleSearchInputChange}
        />
        <select
          onChange={HandleSelectChange}
          value={sort}
          className="bg-gray-600 text-white rounded-lg p-1 m-2 hover:transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <option value={"Name"}>Sort by Name</option>
          <option value={"low to high"}>Sort by price: low to high</option>
          <option value={"high to low"}> Sort by price: high to low</option>
          <option value={"default"}> default Filter</option>
          <option value={"category"}>Sort by category </option>
        </select>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5  py-6 px-5 ">
          {param.map(function (items, index) {
            return <Product items={items} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default ProductList;
