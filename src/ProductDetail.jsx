
import React from "react";
import { Link, useParams } from "react-router-dom";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useEffect } from "react";
import { getProductData } from "./api";
import { useState } from "react";
import Loading from "./Loading";
import NotFound from "./NotFound";


function ProductDetail({ onAddToCart }) {
    
const id  = +useParams().id;
const [ product,setProduct] =useState();
const[loading,setLoading] =useState(true);
const[count,setCount] =useState(1);

console.log("productDetail running", id)
    useEffect(
        function () {
     const p =  getProductData(id);
    //   const promises = object.key(cart).map(function(id) {
    //     return getProductData(id)
    //  });
// const vaddeValiPromises = promises.all(promises);
// badiPromise.then(function(responses) {
//     console.log("")

// });

     p.then(function(product) {
     console.log("api kaa response aa gya", product);
     setProduct(product.data);
     setLoading(false);
     });

     p.catch(function(error){
        console.log("API ka response aagya", error);  
        setLoading(false);
     });

    },
    [id]
    );

   function handleCountChange(event){
    setCount(+event.target.value);
} 
function handButtonClick(){
    onAddToCart(id, count);

}


 if(loading){
    return<Loading />
 }
 if(!product){
    return <NotFound />
 }
    return (
     <>

<Link className="mt-2 text-indigo-500 flex items-center" to="/">
<HiChevronDoubleLeft className="text-5xl" /> Back
</Link>
       <div className="w-80 bg-indigo-400 p-2">
        <img className="w-75" src={product.thumbnail}/>
        <span>{product.category}</span>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <input
         value={count} 
        onChange={handleCountChange}
         className="border border-gray-700 rounded-md px-2 w-12"
         type="number" />
        <button onClick={ handButtonClick } className="px-4 py-2 rounded-md bg-tomato-500 ml-2">
            Add to cart
            </button>
        </div>
        

<div className="flex justify-between px-5">
    <div>
      {id >1 && (
         <Link className="mt-2 text-black-500 flex items-center" 
         to={"/products/" +(id - 1)}>

<HiChevronDoubleLeft className="text-2xl" /> Previous
</Link>
)}
</div>
<div>
<Link className="mt-2 text-black-500 flex items-center" to={"/products/" +(id + 1)}>
<HiChevronDoubleRight className="text-2xl" />Next
</Link>

</div>
</div>

</>
    ); 
}   
  
            
export default ProductDetail;  