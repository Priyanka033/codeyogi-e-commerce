import React,{ useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

import Sidebar from "./Sidebar";
import ProductListPage from './ProductListPage';
import { NavBar } from './NavBar';
import NotFound from './NotFound';
import { getProductData } from './api';



 function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const saveData = JSON.parse(savedDataString);

  console.log("savedData", saveData);

  const [cart, setCart] =useState(saveData);

  function handleCountChange(productid, count){
    const oldCount =cart[productid] || 0;

    const newCart = {...cart,[productid]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);

    localStorage.setItem("my-cart",cartString);
   };

//   const mycart ={32: 55,22: 6,5: 6};
//   const promises = Object.keys(mycart).map (function(id){
//     return getProductData(id);
//   });
// const badiPromise =Promise.all(promises);
// badiPromise.then(function (product){
//   console.log ("promises kaa data",products);
//   setProduct(product);
//   setLoding(false);

// });


 const totalCount = Object.keys(cart).reduce(function(previous, current){
 return previous +cart[current];
},0);
 
  return(
    <div className="bg-gray-300 h-screen overflow-y-scroll flex flex-col">
      <NavBar  productCount={totalCount}  />
      <div className='grow'>
      <Routes>
        <Route index element={<ProductListPage />} />
        <Route path ="/products/:id" 
        element={<ProductDetail onAddToCart={handleCountChange} />} />
        <Route path = "*" element={<NotFound />} />
      </Routes>
      </div>
     
</div>
  );
}   

export default App;

      

