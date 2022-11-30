import React from "react";
import { TfiShoppingCart } from "react-icons/tfi";

export function NavBar({ productCount }){
    return(
        <div className="py-4 bg-white">
            <div className="max-w-6xl flex justify-between mx-auto items-center">
                <img className="h-16"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"/>
                   <div className="flex flex-col items-center">
                     <TfiShoppingCart className="text-5xl" />

                    { productCount<9&& <span className="-m-12 -ml-4 text-white justify-items:end w-6 h-6 text-sm rounded-full bg-tomato-500  p-1"><span className="m-1 mb-2 text-center ">{productCount}
                    </span>   
                    </span>}
                    { productCount>9&& <span className="-m-12 text-s text-white justify-items:end rounded-full bg-tomato-500 ">9+
                                 </span>}                         
                   </div>
            </div>
        </div>
    )
}

//export default NavBar; 