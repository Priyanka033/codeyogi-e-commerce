import React from "react";
import Product from "./Product";

function ProductList({product}) {
  console.log("data",product);
  return (
    <div className="md:grid grid-cols-3  gap-2 space-y-2 md:space-y-0">
      {product.map(function(item) {
      return <Product key={item.title} {...item} />;
      
    })}
    </div>
  );
}
export default ProductList;