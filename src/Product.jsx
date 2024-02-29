import React from "react";

function Product({ items }) {
  console.log("items is ", items, "title is ", items.title);
  return (
    <div className="bg-white  max-w-md p-2 border rounded-md shadow-xl ">
      <div className="max-h-96 overflow-hidden">
        <img className="w-full inset-0 object-cover " src={items.thumbnail} />
      </div>

      <h3 className="font-bold text-xs sm:text-base ">
        <span className="text-blue-700">Title : </span> {items.title}
      </h3>
      <p className="font-bold text-xs hidden md:block sm:text-base ">
        <span className="text-indigo-500 ">category :</span>
        {items.category}
      </p>
      <p className="font-bold text-xs sm:text-base  ">
        <span className=" text-green-500">price : </span>
        {items.price}
      </p>
    </div>
  );
}

export default Product;
