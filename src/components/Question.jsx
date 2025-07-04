import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';
import QUESTIONS from '../questions.js'
import { useState } from 'react';
const Question = ({
  index,
  onSelectAnswer,
  onTimeout,
}) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  });

  let timer = 10000;
  if (answer.selectedAnswer){
    timer = 1000;
  }
  if(answer.isCorrect !==null){
    timer =2000;
  }
  const handleSelectAnswer = (answer) =>{
    setAnswer({selectedAnswer: answer, isCorrect: null});

    setTimeout(()=>{
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer
      })

      setTimeout(()=>{
        onSelectAnswer(answer);
      }, 2000)
    }, 1000)
  }
  let answerState = '';
  if(answer.selectedAnswer && answer.isCorrect !==null){
    answerState = answer.isCorrect ? 'correct':'wrong';
  }else if(answer.selectedAnswer){
    answerState = 'answered'
  }
  return (
    <div id="question">
      <QuestionTimer key={timer} timeout={timer} onTimeout={answer.selectedAnswer==='' ? onTimeout:null} mode={answerState}/>
      <h2>{QUESTIONS[index].id.toUpperCase()}: {QUESTIONS[index].text}</h2>
      <Answers
        key={QUESTIONS[index].id}
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
