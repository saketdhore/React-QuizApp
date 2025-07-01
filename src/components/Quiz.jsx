import { useCallback, useState } from 'react';
import QUESTIONS from "../questions.js";
import QUIZ_COMPLETE_IMG from "../assets/quiz-complete.png";
import Question from './Question.jsx';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState(''); // '' | 'answered' | 'correct' | 'wrong'

  const activeQuestionIndex =userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerState('answered');
      setUserAnswers(prev => [...prev, selectedAnswer]);

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState('correct');
        } else {
          setAnswerState('wrong');
        }

        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 1000);
    },
    []
  );

  const handleSkip = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={QUIZ_COMPLETE_IMG} alt="Quiz complete" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onTimeout={handleSkip}
      />
    </div>
  );
};

export default Quiz;
