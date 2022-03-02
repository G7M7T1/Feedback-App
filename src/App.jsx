import React, {useState} from "react";
import Header from "./conponents/header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./conponents/FeedbackList";
import FeedbackStats from "./conponents/FeedbackStats";
import FeedbackForm from "./conponents/FeedbackForm";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const handleClose = (id) => {
        if (window.confirm("Are you sure you want to close it?")) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }
    return(
        <>
            <Header mainTitle="Feedback UI" />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedback={feedback}  />
                <FeedbackList feedback={feedback} handleClose={handleClose} />
            </div>
        </>
    )
}

export default App
