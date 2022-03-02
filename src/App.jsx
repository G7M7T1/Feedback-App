import React from "react";
import Header from "./conponents/header";
import FeedbackList from "./conponents/FeedbackList";
import FeedbackStats from "./conponents/FeedbackStats";
import FeedbackForm from "./conponents/FeedbackForm";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import AboutIcon from "./conponents/AboutIcon";
import {FeedbackProvider} from "./context/FeedbackContext";

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header mainTitle="Feedback UI"/>
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<About/>}/>
                    </Routes>
                    <AboutIcon/>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App
