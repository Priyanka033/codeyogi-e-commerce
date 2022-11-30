
import React from 'react';
import { Link } from 'react-router-dom';

function Product({ title, price, thumbnail, category,id ,pq }) {
  console.log("cotegory", category)
  return(
     <div className ='max-w-xs'>

{
}
      <div className=" bg-gray-500 ">
        <div className="w-full aspect-square">
        <img className="w-full h-full object-cover" src={thumbnail} />
        </div>
      </div>

      <div className="text-gray-500 text-xs">{category}</div>
      <div className="text-xs">{title}</div>
      <div className="flex">       

        <img src="https://img.icons8.com/office/16/000000/star--v1.png" />
        <img src="https://img.icons8.com/office/16/000000/star--v1.png" />
        <img src="https://img.icons8.com/office/16/000000/star--v1.png" />
        <img src="https://img.icons8.com/office/16/000000/star--v1.png" />
        <img src="https://img.icons8.com/office/16/000000/star--v1.png" />


      </div>
      <div className="text-xs">Rs.{price}</div>
      <div>Data from app.jsx is {pq}</div>
      
      <Link className='rounded rounded-md bg-gray-500' to={"/products/" + id}>
       View Detail 
   </Link>
   </div>
  
  );
}
export default Product;
