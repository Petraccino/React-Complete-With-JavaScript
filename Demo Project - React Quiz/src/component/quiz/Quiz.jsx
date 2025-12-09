import "./Quiz.css";
import imgQuizComplete from "../../assets/quiz-complete.png";
import { useState } from "react";
import QUESTIONS from "../../question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestion = userAnswers.length;
  const quizIsComplete = QUESTIONS.length === activeQuestion;

  function handleSelectAnswer(answer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, answer];
    });
  }

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={imgQuizComplete} alt="Quiz Logo complete" />
        <h2>Quix Completed!</h2>
      </div>
    );
  }

  const shuffleAnswers = [...QUESTIONS[activeQuestion].answers];
  shuffleAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestion].text}</h2>
        <ul id="answers">
          {shuffleAnswers.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
