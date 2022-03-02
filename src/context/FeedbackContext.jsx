import {createContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 100001,
            rating: 10,
            text: 'Hello There, This is fine',
        },
        {
            id: 100002,
            rating: 9,
            text: 'Hi Hi Here Is Other Text',
        },
        {
            id: 100003,
            rating: 8,
            text: 'Leave your comment here my friend'
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const handleClose = (id) => {
        if (window.confirm("Are you sure you want to close it?")) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, newItem) => {
        setFeedback(feedback.map(
            (item) => (item.id === id ? {...item, ...newItem} : item)))
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                handleClose,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
