import React, { useState, useEffect } from "react";
import { GetOneProduct } from "./ServerData";
import { IoMdArrowRoundBack } from "react-icons/io";
import NotFoundPage from "./NotFoundPage";
import CustomBTNthree from "./Button/ButtonThree";
import CustomBTNOne from "./Button/ButtonOne";
import { Link } from "react-router-dom";

function CartPage({ cartDetail }) {
  const [CartProduct, setCartProduct] = useState([{}]);
  
  const [DataNotFound, SetDataNotFound] = useState(false);


        const key = Object.keys(cartDetail);
  console.log("cartDetail is", cartDetail);
   
  
  useEffect(
      function () {
        console.log('useEffect running')
        const promises = key.map(function (requestId) {
          return GetOneProduct(requestId);
        });

        console.log("promises is", promises);
        let productsPromis = Promise.all(promises);

        productsPromis
          .then(function (products) {
            console.log(products, "products");
            setCartProduct(products);
          })
          .catch(function () {
            SetDataNotFound(true);
          });
      },
      []
    );
             
    
  if (DataNotFound) {
    return <NotFoundPage />;
  }

  return ( // link tag ki to property ko sahi dena he 
    <div className="bg-gray-300">
      <Link to="/">  
        <IoMdArrowRoundBack size={39} className="fixed left-3 top-16" />
      </Link>
      <div>
        {CartProduct.map(function (array) {
          return (
            <div className="m-4 sm:flex ">
              <div className=" w-full sm:max-w-1 aspect-square">
                <img
                  className="w-full h-full object-cover "
                  src={array.thumbnail}
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-blue-700">
                  {array.title}
                </h3>
                <p className="">₹ {array.price}</p>
                <h5 className="text-lg font-bold text-green-700">
                  quantity :{cartDetail[array.id]}{" "}
                </h5>
                <div className="flex flex-col gap-3 items-center">
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
export default CartPage;
