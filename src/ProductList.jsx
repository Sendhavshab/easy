import React from "react";

function ProductList({ id, title, thumbnail, category, price }) {
  return (
    <div>
      <img src={thumbnail} />
      <p>{category}</p>
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}
export default ProductList;