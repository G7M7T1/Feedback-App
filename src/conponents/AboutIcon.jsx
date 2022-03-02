import React from "react";
import {FaQuestion} from "react-icons/fa"
import {Link} from "react-router-dom"

function AboutIcon() {
    return (
        <div className="about-link">
            <Link to="/about">
                <FaQuestion color="#ff6a95" size={30}/>
            </Link>
        </div>
    )
}

export default AboutIcon
