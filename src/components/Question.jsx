import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';

const Question = ({
  question,
  answerState,
  selectedAnswer,
  onSelectAnswer,
  onTimeout,
  activeQuestionIndex
}) => {
  return (
    <div id="question">
      <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={onTimeout} />
      <h2>{question.id.toUpperCase()}: {question.text}</h2>
      <Answers
        key={activeQuestionIndex}
        answers={question.answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
};

export default Question;
