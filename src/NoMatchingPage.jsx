import React from "react";


function NoMatchingPage({ children }) {

    return (<div className="p-5 bg-indigo-500 text-white text-3xl m-1">
        {children}
    </div>
    );
}

export default  NoMatchingPage;
    