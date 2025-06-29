import { useEffect, useState } from "react";
const QuestionTimer = ({ timeout, onTimeout }) => {
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(() => {
       const timer = setTimeout(onTimeout, timeout);
       return ()=>{clearTimeout(timer)};
    }, [timeout, onTimeout])
    useEffect(() => {
        const loadingBarInterval = setInterval(() => setRemainingTime(prev => prev - 100), 100);
        return () => {clearInterval(loadingBarInterval)};
    }, [])

    return (
        <progress id="question-time" max={timeout} value={remainingTime}>

        </progress>
    )
}

export default QuestionTimer;

