import react from "react";
import { useState } from "react";
import CustomBTNFour from "./Button/ButtonFour";
function ProductDetails({ param, id }) {
  const [AddToCartInput, setAddToCartInput] = useState(1);
  const object = {
    8: param[0],
    12: param[1],
    10: param[2],
    9: param[3],
    11: param[4],
  };

  const items = object[id];

  function AddToCartInputChange(event) {
    let changToNum = +event.target.value;
    if(changToNum === 0){
       changToNum = "";
    }
    setAddToCartInput(changToNum);
  }
  console.log("AddToCartInputChange");
  return (
    <div>
      <div
        className="bg-white p-2 border md:flex min-h-96  rounded-md shadow-xl m-12 lg:m-auto "
        style={{ maxWidth: "944px" }}
      >
        <div className="overflow-hidden ">
          <img className="w-full block p-2" src={items.thumbnail} />
        </div>
        <div className="flex flex-col w-96 gap-3 items-start border ">
          <h3 className="font-bold     lg:text-2xl ">{items.title}</h3>

          <p className="font-bold  ">category :{items.category}</p>

          <p className="font-bold     inline-block  ">price :{items.price}</p>

          <div>
            <input
              value={AddToCartInput}
              type="number"
              onChange={AddToCartInputChange}
              className="w-10 h-10 mx-4 border-2 border-black rounded-2xl font-bold"
            />
            <CustomBTNFour className="rounded-2xl px-2">
              Add to cart
            </CustomBTNFour>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
