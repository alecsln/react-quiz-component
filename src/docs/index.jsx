import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Quiz from "../lib/Quiz";
import { quiz } from './quiz';

function App() {
  const [quizResult, setQuizResult] = useState();

  useEffect(() => {
  }, [quizResult]);

  return (
    <>
      <Quiz
        quiz={quiz}
        shuffle={true}
        shuffleAnswer={true}
        showInstantFeedback={true}
        continueTillCorrect={true}
        onComplete={setQuizResult}
      />
    </>
  );
}

render(<App />, document.getElementById("app"));
