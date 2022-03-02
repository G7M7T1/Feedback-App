import React from "react";
import Card from "./Card";
import {FaTimes} from "react-icons/fa"
import PropTypes from "prop-types";

function FeedbackItem({item, handleClose}) {
    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleClose(item.id)} className="close"><FaTimes color="purple" /></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem
