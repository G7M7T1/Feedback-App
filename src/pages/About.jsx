import React from "react";
import {Link} from "react-router-dom";
import Card from "../conponents/Card";

function About() {
    return(
        <Card>
            <div className="about">
                <h1 style={{textAlign: "center"}}>About</h1>
                <p style={{textAlign: "center"}}>Hello this is a React Feedback App</p>
                <p style={{textAlign: "center"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorem numquam quos velit voluptates? Accusamus aperiam at, atque cupiditate magni maiores molestiae molestias neque nostrum quisquam ratione sequi tenetur unde!</p>
                <h2 style={{marginTop: "5rem", textAlign: "center"}}>Here Is More Info</h2>
                <p style={{textAlign: "center"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis expedita ipsa itaque laborum, mollitia nemo perferendis quia, quod reiciendis saepe ullam? Aliquam, cumque hic labore non officia qui sapiente?</p>
                <p style={{marginTop: "5rem", textAlign: "center"}}><Link to="/">Back To Home</Link></p>
            </div>
        </Card>
    )
}

export default About
