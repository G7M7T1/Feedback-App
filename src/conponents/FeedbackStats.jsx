import React, {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)

    let average = feedback.reduce((prev, cur) => {
        return prev + cur.rating
    }, 0) / feedback.length

    return (
        <div className="feedback-stats">
            <h4>Reviews: {feedback.length}</h4>
            <h4>Average: {isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, '')}</h4>
        </div>
    )
}

export default FeedbackStats
