import React, {useState} from "react";
import Header from "./conponents/header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./conponents/FeedbackList";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    return(
        <>
            <Header mainTitle="Feedback UI" />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
    )
}

export default App
