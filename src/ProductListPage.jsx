import React from "react";
import ProductList from "./ProductList";
import { getProductList } from "./api";
import { useEffect } from "react";
import NoMatchingPage from "./NoMatchingPage";
import { useState } from "react";
import Loading from "./Loading";
function ProductListPage() {
     const [productList, setProductList]= useState([]);
     const[loading, setLoading] = useState(true);

     const[query, setQuery] = useState("");
     const[sort,setSort] = useState("default");

 useEffect( function () { 
     getProductList().then(function(products){
      setProductList(products);
      setLoading(false);
     });
},[]);

    let  data = productList.filter(function (item) {

        const lowerCaseTitle = item.title.toLowerCase();
        const lowerCaseQuery = query.toLowerCase();

        return lowerCaseTitle.indexOf(lowerCaseQuery) !=-1;
    });
    console.log(data)


if (sort == "price") {
    data.sort(function(x, y) {
      return y.price - x.price;
    });
  }
  else if (sort == "priceH") {
    data.sort(function(x, y) {
      return x.price - y.price;
    });
  }
  else if (sort == "name") {
    data.sort(function(x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }


  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

 if (loading) {
 return <Loading  />;
 }

  return (
    <div className="p-2 max-w-6xl mx-auto bg-white px-9 py-12.5 my-16">
      <div className="flex justify-between">
        <input
          value={query}
          placeholder="search"
          className="border border-gray-700  placeholder:p-4 rounded-md mb-2"
          onChange={handleQueryChange} />

        <select
          className="border border-gray-500 rounded-lg p-2  mb-2 px-4"
          onChange={handleSortChange}
        >
          <option value="default"> default sort</option>
          <option value="name"> sort by name</option>
          <option value="price"> sort by price:high to low </option>

          <option value="priceH"> sort by price:low to high</option>
        </select>
      </div>

  { data.length > 0 && <ProductList product={data} />}
   {data.length == 0 &&<NoMatchingPage>No Matching product</NoMatchingPage>}
    
    </div>
  ); 
}

export default  ProductListPage;