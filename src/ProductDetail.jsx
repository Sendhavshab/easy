
import React , { useState, useEffect } from "react";
import CustomBTNFour from "./Button/ButtonFour";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GetOneProduct } from "./ServerData";
function ProductDetails() {
  const [AddToCartInput, setAddToCartInput] = useState(1);
  const [product, setProduct] = useState([]);
  const [OneItemArr, SetOneItemArr] = useState([]);

      useEffect(function () {
        const data = GetOneProduct();
        SetOneItemArr(data);
      }, []);

  const { id } = useParams();
  

  for (let i = 0; i < OneItemArr.length; i++) {
    console.log(OneItemArr[i].id, "data length", OneItemArr.length);
    if (id == OneItemArr[i].id) {
      const contant = OneItemArr[i];
      if (contant == product) {
        break;
      }
      setProduct(contant);
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
  console.log("product is ", product, product == []);
  if (product.length == 0) {
    console.log("product is he ", product);
    return (
      <div className="flext flex-col items-center justify-center lg:h-3/4 ">
        <h1 className="text-3xl font-bold m-10 "> opps ! 🤦‍♀️ Item Not found</h1>
        <Link to="/">
          <CustomBTNFour className="rounded-2xl px-2 m-10">
            Go Back
          </CustomBTNFour>
        </Link>
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
