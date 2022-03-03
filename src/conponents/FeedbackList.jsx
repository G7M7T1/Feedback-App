import React, {useContext} from "react";
import FeedbackItem from "./FeedbackItem";
import {motion, AnimatePresence} from "framer-motion"
import FeedbackContext from "../context/FeedbackContext";
import Loading from "./Loading";

function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext)
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p style={{textAlign: "center", marginTop: "2rem"}}>There No Feedback Yet</p>
    }

    return isLoading ? <Loading /> : (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList
