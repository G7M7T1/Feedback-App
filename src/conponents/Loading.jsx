import React from "react";
import LoadingIcon from "./assets/loadingicon.gif"

function Loading() {
    return(
        <img src={LoadingIcon} alt="Loading Effect" style={{width: "100px", margin: "2rem auto", display: "block"}} />
    )
}

export default Loading
