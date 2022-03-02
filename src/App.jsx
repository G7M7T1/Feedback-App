import React, {useState} from "react";
import {v4 as uuidv4} from "uuid"
import Header from "./conponents/header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./conponents/FeedbackList";
import FeedbackStats from "./conponents/FeedbackStats";
import FeedbackForm from "./conponents/FeedbackForm";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import AboutIcon from "./conponents/AboutIcon";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const handleClose = (id) => {
        if (window.confirm("Are you sure you want to close it?")) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback)
    }

    return (
        <Router>
            <Header mainTitle="Feedback UI"/>
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm addFeedback={addFeedback}/>
                            <FeedbackStats feedback={feedback}/>
                            <FeedbackList feedback={feedback} handleClose={handleClose}/>
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<About/>}/>
                </Routes>
                <AboutIcon />
            </div>
        </Router>
    )
}

export default App
