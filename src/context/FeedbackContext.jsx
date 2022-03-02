import {createContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 100001,
            rating: 10,
            text: 'I like this work, and it look like working fine',
        },
        {
            id: 100002,
            rating: 9,
            text: 'I like this work, and it look like working fine',
        },
        {
            id: 100003,
            rating: 8,
            text: 'I like this work, and it look like working fine',
        }
    ])

    const handleClose = (id) => {
        if (window.confirm("Are you sure you want to close it?")) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <FeedbackContext.Provider value={{feedback, handleClose, addFeedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
