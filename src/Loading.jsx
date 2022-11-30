import  React  from "react";
import { ImSpinner10 } from "react-icons/im";
 
function Loading() {
    return <div className="grow text-indigo-700 text-3xl flex items-center justify-center">
       
        <ImSpinner10 className="animate-spin justify-content:center text-6xl text-black" /> </div>;
}

export default Loading;