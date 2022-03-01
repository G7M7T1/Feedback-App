import React from "react";
import PropTypes from "prop-types";

function Header({mainTitle}) {
    return(
        <header>
            <div className="container">
                <h2>{mainTitle}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    mainTitle: "Title"
}

Header.protoType = {
    mainTitle: PropTypes.string
}

export default Header
