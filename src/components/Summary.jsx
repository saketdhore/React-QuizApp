import QUIZ_COMPLETE_IMG from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

const Summary = ({ userAnswers }) => {
  const totalQuestions = QUESTIONS.length;

  const stats = userAnswers.reduce(
    (acc, answer, index) => {
      const correctAnswer = QUESTIONS[index].answers[0];

      if (answer === null) {
        acc.skipped++;
      } else if (answer === correctAnswer) {
        acc.correct++;
      } else {
        acc.wrong++;
      }

      return acc;
    },
    { skipped: 0, correct: 0, wrong: 0 }
  );

  return (
    <div id="summary">
      <img src={QUIZ_COMPLETE_IMG} alt="Quiz complete" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            {Math.round((stats.skipped / totalQuestions) * 100)}%
          </span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">
            {Math.round((stats.correct / totalQuestions) * 100)}%
          </span>
          <span className="text">answered correct</span>
        </p>
        <p>
          <span className="number">
            {Math.round((stats.wrong / totalQuestions) * 100)}%
          </span>
          <span className="text">answered wrong</span>
        </p>
      </div>

      <ol>
        {QUESTIONS.map((question, index) => {
          const userAnswer = userAnswers[index];
          const correctAnswer = question.answers[0];

          let cssBaseClass = "user-answer";

          if (userAnswer === null) {
            cssBaseClass += " skipped";
          } else if (userAnswer === correctAnswer) {
            cssBaseClass += " correct";
          } else {
            cssBaseClass += " wrong";
          }

          return (
            <li key={question.id}>
              <h3>{index + 1}</h3>
              <p className="question">{question.text}</p>
              <p className={cssBaseClass}>{userAnswer || "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
