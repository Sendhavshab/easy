import React, { useState, useEffect, memo, useContext } from "react";
import { GetOneProduct } from "../ServerData";
import { IoMdArrowRoundBack } from "react-icons/io";
import NotFoundPage from "../handleError/NotFoundPage";
import CustomBTNthree from "../Button/ButtonThree";
import CustomBTNOne from "../Button/ButtonOne";
import { Link } from "react-router-dom";
import Loader from "../handleError/Loader";
import CartCountChange from "./CartCountChange";
import CartItemRemover from "./CartItemRemover";
import { AddTocartContext, CartProviderHOC } from "../HOC/Context";

function CartPage({ cartDetail }) {
  const [CartProduct, setCartProduct] = useState([{}]);
  const [showLoader, setShowLoader] = useState(false);
  const [DataNotFound, SetDataNotFound] = useState(false);
  const key = Object.keys(cartDetail);

  useEffect(
    function () {
      setShowLoader(true);
      const promises = key.map(function (requestId) {
        return GetOneProduct(requestId);
      });
      let productsPromis = Promise.all(promises);

      productsPromis
        .then(function (products) {
          setCartProduct(products);

          setShowLoader(false);
        })
        .catch(function () {
          SetDataNotFound(true);

          setShowLoader(false);
        });
    },
    [cartDetail]
  );

  if (DataNotFound) {
    return <NotFoundPage />;
  }
  if (key.length == 0) {
    return (
      <div>
        <h1 className="text-3xl   font-extrabold text-red-900 m-3">
          NOTHING TO SEE THERE FIRST ADD SOMETHING -⩥
          <Link to="/" className="font-bold text-blue-600">
            GO HOME
          </Link>
        </h1>
      </div>
    );
  }
  return (
    // link tag ki to property ko sahi dena he
    <div className="bg-gray-300 py-5">
{   showLoader &&   <Loader></Loader>}
      <Link to="/">
        <IoMdArrowRoundBack
          size={39}
          className="fixed hidden text-gray-400 hover:text-black opacity-60 hover:opacity-100  md:block left-3 top-16"
          title="Go Back"
        />
      </Link>
      <div>
        <CustomBTNthree className="block md:hidden">
          BY NOW all {key.length} products
        </CustomBTNthree>
        <div className=" hidden md:flex flex-col md:max-w-2xl lg:max-w-4xl m-auto">
          <CustomBTNthree className="block">
            BY NOW all {key.length} products
          </CustomBTNthree>
          <input
            placeholder="Aply Coupen"
            className="border border-gray-300 rounded-xl px-3 py-1 hover:transform hover:scale-105 transition duration-300 ease-in-out"
          />
          <CustomBTNOne>CHECK COUPEN</CustomBTNOne>
        </div>
        {CartProduct.map(function (product, index) {
          return (
            <div
              key={index}
              className="m-4 sm:flex gap-3 justify-around md:justify-normal"
            >
              <div className=" relative w-full sm:max-w-xs aspect-square">
                <CartItemRemover id={product.id} />
                <img
                  className="w-full h-full object-cover "
                  src={product.thumbnail}
                />
              </div>

              <div className="">
                <h3 className="font-bold text-2xl md:text-center text-blue-700">
                  {product.title}
                </h3>
                <p className="md:text-center">₹ {product.price}</p>
                <h5 className="text-lg md:text-center font-bold text-green-700">
                  quantity :{cartDetail[product.id]}
                </h5>
                <CartCountChange
                  id={product.id}
                  productValue={cartDetail[product.id]}
                />
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
export default CartProviderHOC(CartPage);
