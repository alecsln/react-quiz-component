import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import Core from './Core';
import { defaultLocale } from './Locale';
import "./styles.css";

const Quiz = ({ quiz, shuffle, shuffleAnswer, showDefaultResult, onComplete, customResultPage, showInstantFeedback, continueTillCorrect }) => {
  const [start, setStart] = useState(false);
  const [questions, setQuestions] = useState(quiz.questions);
  const [numOfQuestions, setNumOfQuestions] = useState(77);

  useEffect(() => {
    if (shuffle) {
      setQuestions(shuffleQuestions(quiz.questions));
    } else {
      setQuestions(quiz.questions);
    }

    setQuestions(questions.map(question => {
      if (shuffleAnswer) {
        if (!question.fixed) {
          const shufferedAns = shuffleArray(question.answers);
          question.correctAnswer = remapCorrectAnswer(question.answers, shufferedAns, question.correctAnswer);
          question.answers = shufferedAns;
        }
      }
      return question;
    }).map((question, index) => ({
      ...question,
      questionIndex: index + 1
    })))

  }, [start])

  const shuffleQuestions = useCallback((questions) => {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
  }, [])

  const remapCorrectAnswer = (originAnswers, shufferedAnswers, originCorrect) => {
    return originCorrect.map(item => shufferedAnswers.indexOf(originAnswers[item - 1]) + 1);
  }

  const validateQuiz = (quiz) => {
    if (!quiz) {
      console.error("Quiz object is required.");
      return false;
    }

    const { questions } = quiz;
    if (!questions) {
      console.error("Field 'questions' is required.");
      return false;
    }

    for (let i = 0; i < questions.length; i++) {
      const { question, questionType, questionPic, answers, correctAnswer } = questions[i];
      if (!question) {
        console.error("Field 'question' is required.");
        return false;
      }

      if (!questionType) {
        questionType = 'text';
      }

      if (!answers) {
        console.error("Field 'answers' is required.");
        return false;
      } else {
        if (!Array.isArray(answers)) {
          console.error("Field 'answers' has to be an Array");
          return false;
        }
      }

      if (!correctAnswer) {
        console.error("Field 'correctAnswer' is required.");
        return false;
      }
    }

    return true;
  }

  const shuffleArray = arr => arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

  if (!validateQuiz(quiz)) {
    return (null)
  }

  const appLocale = {
    ...defaultLocale,
    ...quiz.appLocale
  };

  return (
    <div className="react-quiz-container">
      {!start &&
        <div>
          <h2>{quiz.quizTitle}</h2>
          {quiz.quizSynopsis &&
            <div className="quiz-synopsis">
              {quiz.quizSynopsis}
            </div>
          }
          <div>Number of question: <input type="number" value={numOfQuestions} onChange={e => setNumOfQuestions(e.target.value)}/> /  {appLocale.landingHeaderText.replace("<questionLength>", quiz.questions.length)}</div>
          <div className="startQuizWrapper">
            <button onClick={() => setStart(true)} className="startQuizBtn btn">{appLocale.startQuizBtn}</button>
          </div>
        </div>
      }

      {start && <Core
        questions={questions}
        duration={7200}
        maxQuestion={numOfQuestions}
        // showDefaultResult={showDefaultResult}
        onComplete={onComplete}
        // customResultPage={customResultPage}
        showInstantFeedback={showInstantFeedback}
        continueTillCorrect={continueTillCorrect}
        appLocale={appLocale}
      />
      }
    </div>
  );
}

Quiz.propTypes = {
  quiz: PropTypes.object,
  shuffle: PropTypes.bool,
  shuffleAnswer: PropTypes.bool,
  showDefaultResult: PropTypes.bool,
  onComplete: PropTypes.func,
  customResultPage: PropTypes.func,
  showInstantFeedback: PropTypes.bool,
  continueTillCorrect: PropTypes.bool
};

export default Quiz;
