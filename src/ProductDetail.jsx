import React, { useState, useEffect } from "react";
import CustomBTNFour from "./Button/ButtonFour";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GetOneProduct } from "./ServerData";
import { FiLoader } from "react-icons/fi";

function ProductDetails() {
  const [AddToCartInput, setAddToCartInput] = useState(1);
  const [product, setProduct] = useState([]);
  const [OneItemArr, SetOneItemArr] = useState([]);

  const { id } = useParams();
  console.log("id is " + id);
  useEffect(function () {
    const data = GetOneProduct(id);
    data.then(function (responce) {
      setProduct(responce.data);

      console.log(responce.data);
    });
  }, []);
  
  function AddToCartInputChange(event) {

    console.log("AddToCartInputChange");

    let changToNum = +event.target.value;

    if (changToNum === 0) {
      changToNum = "";
    }
    setAddToCartInput(changToNum);
  }


  if (product.length == 0) {
    return (
      <div>
        <Link to="/">
          <IoMdArrowRoundBack size={39} className="fixed left-3 top-16" />
        </Link>
        <div className="w-screen max-h-96 flex items-center justify-center">
          <FiLoader className="animate-pulse h-6 w-6" />
        </div>
      </div>
    );
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
          <img className="w-full block p-2" src={product.thumbnail} />
        </div>
        <div className="flex flex-col w-96 gap-3 items-start border ">
          <h3 className="font-bold     lg:text-2xl ">{product.title}</h3>

          <p className="font-bold  ">category :{product.category}</p>

          <p className="font-bold     inline-block  ">price :{product.price}</p>

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
