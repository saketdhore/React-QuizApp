import { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
    const shuffled = useRef();

    if (!shuffled.current) {
        shuffled.current = [...answers];
        shuffled.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffled.current.map((answer) => {
                let cssClassButton = "";
                const isSelected = selectedAnswer === answer;

                if (answerState === "answered" && isSelected) {
                    cssClassButton = "selected";
                } else if (answerState === "correct" && isSelected) {
                    cssClassButton = "correct";
                } else if (answerState === "wrong" && isSelected) {
                    cssClassButton = "wrong";
                }

                return (
                    <li key={answer} className="answer">
                        <button
                            onClick={() => onSelect(answer)}
                            className={cssClassButton}
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
