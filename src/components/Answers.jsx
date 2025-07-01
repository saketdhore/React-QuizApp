import { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();

  // Shuffle once when first rendered
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let cssClass = "";

        const isSelected = selectedAnswer === answer;

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        } else if (answerState === "correct" && isSelected) {
          cssClass = "correct";
        } else if (answerState === "wrong" && isSelected) {
          cssClass = "wrong";
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
