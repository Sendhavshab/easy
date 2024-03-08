import React, { useState, useEffect, memo } from "react";
import { GetOneProduct } from "./ServerData";
import { IoMdArrowRoundBack } from "react-icons/io";
import NotFoundPage from "./NotFoundPage";
import CustomBTNthree from "./Button/ButtonThree";
import CustomBTNOne from "./Button/ButtonOne";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function CartPage({ cartDetail }) {
  const [CartProduct, setCartProduct] = useState([{}]);
  const [showLoader, setShowLoader] = useState(false);
  const [DataNotFound, SetDataNotFound] = useState(false);

  const key = Object.keys(cartDetail);
  console.log("cartDetail is", cartDetail);

  useEffect(function () {
    console.log("useEffect running");
    const promises = key.map(function (requestId) {
      setShowLoader(true);
      return GetOneProduct(requestId);
    }, []);

    console.log("promises is", promises);
    let productsPromis = Promise.all(promises);

    productsPromis
      .then(function (products) {
        console.log(products, "products");
        setCartProduct(products);

        setShowLoader(false);
      })
      .catch(function () {
        SetDataNotFound(true);

        setShowLoader(false);
      });
  }, []);

  if (showLoader) {
    return <Loader></Loader>;
  }
  if (DataNotFound) {
    return <NotFoundPage />;
  }

  return (
    // link tag ki to property ko sahi dena he
    <div className="bg-gray-300">
      <Link to="/">
        <IoMdArrowRoundBack size={39} className="fixed left-3 top-16" />
      </Link>
      <div>
        <CustomBTNthree className="block md:hidden">
          BY NOW all {key.length} products
        </CustomBTNthree>
        <div className=" hidden md:flex flex-col max-w-4xl m-auto">
          <CustomBTNthree className="block">
            BY NOW all {key.length} products
          </CustomBTNthree>
          <input
            placeholder="Aply Coupen"
            className="border border-gray-300 rounded-xl px-3 py-1 hover:transform hover:scale-105 transition duration-300 ease-in-out"
          />
          <CustomBTNOne>CHECK COUPEN</CustomBTNOne>
        </div>
        {CartProduct.map(function (array) {
          return (
            <div className="m-4 sm:flex gap-3 justify-around md:justify-normal">
              <div className=" w-full sm:max-w-xs aspect-square">
                <img
                  className="w-full h-full object-cover "
                  src={array.thumbnail}
                />
              </div>
              <div className="">
                <h3 className="font-bold text-2xl md:text-center text-blue-700">
                  {array.title}
                </h3>
                <p className="md:text-center">₹ {array.price}</p>
                <h5 className="text-lg md:text-center font-bold text-green-700">
                  quantity :{cartDetail[array.id]}{" "}
                </h5>
                <div className=" flex flex-col md:hidden gap-3 items-center">
                  <CustomBTNthree className="block">BY NOW </CustomBTNthree>
                  <input
                    placeholder="Aply Coupen"
                    className="border border-gray-300 rounded-xl px-3 py-1 hover:transform hover:scale-105 transition duration-300 ease-in-out"
                  />
                  <CustomBTNOne>CHECK COUPEN</CustomBTNOne>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default memo(CartPage);
