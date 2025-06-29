import { use, useCallback } from 'react';
import { useState } from 'react';
import QUESTIONS from "../questions.js";
import QUIZ_COMPLETE_IMG from "../assets/quiz-complete.png"
import QuestionTimer from './QuestionTimer.jsx';
const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    const handleSelectAnswer = useCallback(
        (selectedAnswer) => {
            setUserAnswers(prev => [...prev, selectedAnswer]);
        }, []);
    if (quizIsComplete) {
        return <div id="summary">
            <img src={QUIZ_COMPLETE_IMG}></img>
            <h2>Quiz Completed!</h2>
        </div>
    }
    const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswer.sort((a, b) => Math.random() - 0.5);
    const handleSkip = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer])
    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkip} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswer.map((answer) => (
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>))}
                </ul>
            </div>
        </div>
    )
}

export default Quiz;