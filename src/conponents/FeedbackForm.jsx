import React, {useContext, useEffect, useState} from "react";
import Card from "./Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
    const [text, setText] = useState("")
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (event) => {
        if (text === "") {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== "" && text.trim().length <= 6) {
            setBtnDisabled(true)
            setMessage("at least 6 characters")
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (text.trim().length > 6) {
            const newFeedback = {
                text,
                rating
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }

            setBtnDisabled(true)
            setRating(10)
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service?</h2>
                <RatingSelect select={setRating} selected={rating}/>
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review here"/>
                    <Button isDisabled={btnDisabled} type="submit" version="secondary">Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
