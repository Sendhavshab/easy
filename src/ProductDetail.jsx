import react from "react";

function ProductDetails({ param }) {
  const items = param[0];
  console.log("image is ", items.images[0]);
  return (
    <div>
      <div className="bg-white max-w-md p-2 border rounded-md shadow-xl m-12 ">
        <div className="overflow-hidden max-h-96 relative w-64 h-64 ">
          <img
            className="max-w-full absolute inset-0 object-cover transition-transform transform hover:scale-150"
            src={items.thumbnail}
          />
          <img src={items.images[0]} />
        </div>

        <h3 className="font-bold text-xs sm:text-base ">
          <span className="text-blue-700">Title : </span> {items.title}
        </h3>
        <p className="font-bold text-xs hidden md:block sm:text-base ">
          <span className="text-indigo-500 ">category :</span> {items.category}
        </p>
        <p className="font-bold text-xs sm:text-base  ">
          <span className=" text-green-500">price : </span>
          {items.price}
        </p>
      </div>
    </div>
  );
}
export default ProductDetails;
