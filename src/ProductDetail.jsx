import React, { useState, useEffect, useCallback } from "react";
import CustomBTNFour from "./Button/ButtonFour";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GetOneProduct } from "./ServerData";
import NextBackBtn from "./NextBackBtn";
import NotFoundPage from "./NotFoundPage";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";
import Loader from "./Loader";

function ProductDetails({ onCartbuttonClick }) {
  const [CartInputvalue, setCartInputvalue] = useState(1);
  const [product, setProduct] = useState([]);
  const [DataNotFound, SetDataNotFound] = useState(false);

  const id = +useParams().id;
  console.log("id is " + id);

  useEffect(
    function () {
      const data = GetOneProduct(id);
      data
        .then(function (product) {
          setProduct(product);
          setCartInputvalue(1);
        })
        .catch(function () {
          SetDataNotFound(true);
        });
    },
    [id]
  );
  if (DataNotFound) {
    return <NotFoundPage />;
  }
  function HandleInputPlusClick() {
    console.log("CartInputvalueChange");

    let changToNum = CartInputvalue + 1;

    if (changToNum !== 11) {
      setCartInputvalue(changToNum);
    }
  }
  function HandleInputMinusClick() {
    console.log("CartInputvalueChange");

    let changToNum = CartInputvalue - 1;

    if (changToNum !== 0) {
      setCartInputvalue(changToNum);
    }
  }
  const handelCartBtnchange = useCallback(
    function () {
      onCartbuttonClick(id, CartInputvalue);
    },
    [onCartbuttonClick]
  );

  if (product.length == 0) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <Link to="/">
        <IoMdArrowRoundBack
          size={39}
          className="fixed hidden md:block  left-3 top-16"
        />
      </Link>

      <div
        className="bg-white p-2 border md:flex min-h-96  rounded-md shadow-xl m-12 lg:m-auto "
        style={{ maxWidth: "944px" }}
      >
        <div className="overflow-hidden flex  ">
          <img className="w-full block m-2" src={product.thumbnail} />
        </div>
        <div className="flex flex-col w-96 gap-3 items-start border ">
          <h3 className="font-bold  text-2xl   lg:text-3xl ">
            {product.title}
          </h3>

          <p className="font-bold  ">category :{product.category}</p>

          <p className="font-bold  opacity-90 text-gray-700   inline-block  ">
            price :${product.price}
          </p>

          <div>
            <button className="m-2" onClick={HandleInputMinusClick}>
              <HiOutlineMinusCircle className="w-5 h-5 rounded-full hover:bg-black border hover:text-white " />
            </button>
            <input
              value={CartInputvalue}
              type="number"
              className="w-10 text-center h-10 mx-4 border-2 border-black rounded-2xl font-bold"
            />
            <button className="m-2" onClick={HandleInputPlusClick}>
              <HiOutlinePlusCircle className="w-5 h-5 rounded-full hover:bg-black border hover:text-white " />
            </button>
            <CustomBTNFour
              onClick={handelCartBtnchange}
              className="rounded-2xl px-2 block md:inline-block mt-4 md:m-0 "
            >
              Add to cart
            </CustomBTNFour>
          </div>
        </div>
      </div>
      <NextBackBtn setProduct={setProduct} id={id}></NextBackBtn>
    </div>
  );
}
export default ProductDetails;
