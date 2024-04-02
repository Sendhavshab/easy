import React, { useEffect, useMemo, useState } from "react";
import Product from "./Product";
import { GetProductList } from "./ServerData";
import { FiLoader } from "react-icons/fi";
import NotFoundPage from "./handleError/NotFoundPage";
import Loader from "./handleError/Loader";

function ProductList({}) {
  const [Query, SetQuery] = useState("");
  const [sort, setsort] = useState("default");
  const [allItems, SetAllItems] = useState([]);
  const [DataNotFound, SetDataNotFound] = useState(false);
  const [informSortChanged, SetInformSortChanged] = useState(false);
  useEffect(function () {
    const data = GetProductList();
    data
      .then((products) => {
        SetAllItems(products);
        console.log("error he babua")
      })
      .catch(function () {
        SetDataNotFound(true);
        console.log("error he babua")
      });
  }, []);

  const param = useMemo(
    function () {
      const a = allItems.filter(function (item) {
        return (
          item.title.toLowerCase().indexOf(Query.toLowerCase()) !== -1 ||
          item.category.toLowerCase().indexOf(Query.toLowerCase()) !== -1
        );
      });

      return a;
    },

    [allItems, Query]
  );

  useEffect(
    function () {
      if (sort === "Name") {
        param.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sort === "low to high") {
        param.sort((a, b) => a.price - b.price);
      } else if (sort === "high to low") {
        param.sort((a, b) => b.price - a.price);
      } else if (sort === "category") {
        param.sort((a, b) => a.category.localeCompare(b.category));
      }
      SetInformSortChanged(!informSortChanged);
    },
    [sort]
  );

  function HandleSearchInputChange(event) {
    SetQuery(event.target.value);
  }
  function HandleSelectChange(event) {
    setsort(event.target.value);
  }
  if (DataNotFound) {
    return <NotFoundPage />;
  }

  if (allItems.length == 0) {
    return (
      <div className="w-screen h-2/3 flex items-center justify-center">
        <FiLoader className="animate-pulse h-6 w-6" />
      </div>
    );
  }

  return (
    <div className="lg:px-10 max-w-7xl lg:m-auto pb-12 ">
      {allItems.length == 0 && <Loader></Loader>}
      <div className="md:bg-gray-100">
        <input
          title="Search items"
          placeholder="search"
          className="border-2 border-gray-600 rounded-md md:rounded-xl w-20 md:w-40 px-3 md:py-1 hover:transform hover:scale-105 transition duration-300 ease-in-out m-2"
          value={Query}
          onChange={HandleSearchInputChange}
        />
        <select
          title="Filter items"
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
        {param.length == 0 && (
          <p className="text-xl font-bold md:text-3xl m-auto text-center text-red-600 ">
            Sorry we don't have this item try searching Something else
          </p>
        )}
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
