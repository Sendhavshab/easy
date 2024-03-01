import react from "react";
import { useState } from "react";
import CustomBTNFour from "./Button/ButtonFour";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function ProductDetails({ allData }) {
  const [AddToCartInput, setAddToCartInput] = useState(1);

  const { id } = useParams();
  console.log(id, "id", allData[1].id);
  let product;
  for (let i = 0; i < allData.length; i++) {
    console.log(allData[i].id, "data length", allData.length);
    if (id == allData[i].id) {
      product = allData[i];
      break;
    }
  }

  const items = product;

  function AddToCartInputChange(event) {
    console.log("AddToCartInputChange");
    let changToNum = +event.target.value;
    if (changToNum === 0) {
      changToNum = "";
    }
    setAddToCartInput(changToNum);
  }

  return (
    <div>
      <Link to="/">
        <IoMdArrowRoundBack size={39} className="fixed left-3 top-16" />
      </Link>

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
