import React from "react";

function ProductList({ param }) {
  return (
    <div className="md:px-10 ">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5 md:bg-slate-50 py-6 px-5 ">
        {param.map(function (items) {
          return (
            <div className="bg-white max-w-md p-2 border rounded-md shadow-xl ">
              <div className="overflow-hidden max-h-96 relative w-64 h-64 ">
                <img
                  className="max-w-full absolute inset-0 object-cover transition-transform transform hover:scale-150"
                  src={items.thumbnail}
                />
              </div>

              <h3 className="font-bold text-xs sm:text-base ">
                <span className="text-blue-700">Title : </span> {items.title}
              </h3>
              <p className="font-bold text-xs hidden md:block sm:text-base ">
                <span className="text-indigo-500 ">category :</span>{" "}
                {items.category}
              </p>
              <p className="font-bold text-xs sm:text-base  ">
                <span className=" text-green-500">price : </span>
                {items.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProductList;
