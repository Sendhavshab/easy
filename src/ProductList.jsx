import React, { useEffect, useMemo, useState } from "react";
import Product from "./Product";
import { GetProductList } from "./ServerData";
import NotFoundPage from "./handleError/NotFoundPage";
import PlaceholderProduct from "./PlaceholderProduct";
import { Link, useSearchParams } from "react-router-dom";
import { IoSearchCircleSharp } from "react-icons/io5";
function ProductList({}) {

  const [searchParams , setSearchParams ] = useSearchParams()
     const param = Object.fromEntries([...searchParams])  
     
     let {page , query , sort} = param
     page = +page || 1
    query = query || ''

    sort = sort || 'default'
  const [allItems, SetAllItems] = useState();
  const [DataNotFound, SetDataNotFound] = useState(false);
  const [DummyData , setdummyData] = useState([])
  const [ Loading, setLoading ] = useState(true) 

  const [ Query, setQuery ] = useState(query) 


console.log("all data is " , allItems)




  useEffect(function () {


   setLoading(true)
  


    const { codeYogiData, dummyData } = GetProductList(sort , query , page);

  
    codeYogiData
      .then((data) => { SetAllItems(data);    setLoading(false)} ).catch( () => SetDataNotFound(true))
 
        dummyData.then((Data) => setdummyData(Data));

  }, [sort ,  query  , page ]);

  
  
  function HandleSearchInputChange(event) {
    setQuery(  event.target.value);
  }
   
  function HandleSearchInput() {
    setSearchParams( { ...param ,query : Query , page: 1 } );
  }
  function HandleSelectChange(event) {
    setSearchParams( { ...param ,sort : event.target.value });
  }
  if (DataNotFound) {
    return <NotFoundPage />;
  }

const InputKeyPress = (event) => {

  if(event.key === "Enter"){
    HandleSearchInput()
  }
}
 

  return (
    <div className="lg:px-10 max-w-7xl lg:m-auto pb-12 ">

      <div className="md:bg-gray-100">
      <div className="inline-block relative  hover:transform hover:scale-105 transition duration-300 ease-in-out"> 
       <input
          title="Search items"
          onKeyDown={InputKeyPress}
          placeholder="search"
          className="border-2 border-gray-600 rounded-md md:rounded-xl w-32 md:w-48 px-3 md:py-1 m-2"
          value={Query}
          onChange={HandleSearchInputChange}
        />
       <IoSearchCircleSharp onClick={HandleSearchInput} className=" absolute   right-3 bottom-2   cursor-pointer text-2xl  md:text-4xl inline-block" />
        </div>
        <select
          title="Filter items"
          onChange={HandleSelectChange}
          value={sort}
          className="bg-gray-600 text-white rounded-lg   w-32 md:w-40 p-1 m-2 hover:transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <option value={"title"}>Sort by Name</option>
          <option value={"low to high"}>Sort by price: low to high</option>
          <option value={"high to low"}> Sort by price: high to low</option>
          <option value={"default"}> default Filter</option>
        </select>
      
{ Loading ? 
    <PlaceholderProduct>15</PlaceholderProduct> :

       <div>  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5   py-6 px-5 ">
          {allItems.data.length == 0 && !Loading && (
          <p className="text-xl font-bold md:text-3xl m-auto text-center text-red-600 ">
            Sorry we don't have this item try searching Something else
          </p>
        )}

          {allItems.data.map(function (items, index) {
          const dummyProduct =  DummyData.filter((p) => p.id == items.id)
          const b = dummyProduct[0] || false
            return (
              <Product items={items} key={index} dummyProduct={b.thumbnail} />
            );
          })}
        </div>
        
        
        
        
         
        { [...Array(allItems.meta.last_page)].map((n , i) => {
          
          let classes;
           if(i+1 === page){
            classes = "bg-orange-600 hover:bg-orange-400  cursor-not-allowed"
           }
          
        return  <Link
        key={i}
        to={`?${new URLSearchParams({...param , page: i + 1})}`}
          className={`md:px-3 px-2 py-1 md:py-2 duration-150 transition-all m-2 border-2
        hover:rounded-md hover:bg-orange-500 inline-block hover:text-white font-black border-black ${classes} `}
        >
         {i + 1}
        </Link>}) }</div>
     }
       </div>
    </div>
  );
}
export default ProductList;
