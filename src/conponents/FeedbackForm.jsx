import React, {useState} from "react";
import Card from "./Card";
import Button from "./Button";

function FeedbackForm() {
    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")

    const handleTextChange = (event) => {
        if(text === "") {
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

    return (
        <Card>
            <form>
                <h2>How would you rate our service?</h2>
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review here" />
                    <Button isDisabled={btnDisabled} type="submit" version="secondary">Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
