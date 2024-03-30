import React, { useState, useEffect, useCallback } from "react";
import CustomBTNFour from "./Button/ButtonFour";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GetOneProduct } from "./ServerData";
import NextBackBtn from "./NextBackBtn";
import NotFoundPage from "./handleError/NotFoundPage";
import Loader from "./handleError/Loader";
import HelmetMeta from "./Helmet";
import CartCountChange from "./Cart/CartCountChange";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [DataNotFound, SetDataNotFound] = useState(false);
  const id = +useParams().id;

  useEffect(
    function () {
      const data = GetOneProduct(id);
      data
        .then(function (product) {
          setProduct(product);
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
  if (product.length == 0) {
    return <Loader arrow></Loader>;
  }

  return (
    <div>
      <Link to="/">
        <IoMdArrowRoundBack
          size={39}
          className="fixed hidden text-gray-400 hover:text-black opacity-60 hover:opacity-100  md:block left-3 top-16"
          title="Go Back"
        />
      </Link>

      <div
        className="bg-white p-2 border md:flex min-h-96  rounded-md shadow-xl m-12 lg:m-auto "
        style={{ maxWidth: "944px" }}
      >
        <div className="overflow-hidden flex  ">
          <img
            className="w-full block m-2"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
        <div className="flex flex-col w-96 gap-3 items-start border ">
          <h3 className="font-bold text-xl  md:text-2xl   lg:text-3xl ">
            {product.title}
          </h3>

          <p className="font-bold ">category :{product.category}</p>

          <p className="font-bold  opacity-90 text-gray-700   inline-block  ">
            price :${product.price}
          </p>

          <CartCountChange id={id} />
        </div>
      </div>
      <NextBackBtn setProduct={setProduct} id={id}></NextBackBtn>
    </div>
  );
}
export default ProductDetails;
