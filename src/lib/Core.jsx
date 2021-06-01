import React, { useState, useEffect, useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';
import QuizResultFilter from "./core-components/QuizResultFilter";
import { checkAnswer, rawMarkup } from "./core-components/helpers";
import InstantFeedback from "./core-components/InstantFeedback";
import Explanation from "./core-components/Explanation";
import Timer from './core-components/Timer';

const Core = ({ homePage, questions, duration, maxQuestion, appLocale, showDefaultResult, onComplete, customResultPage, showInstantFeedback, continueTillCorrect }) => {
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [showNextQuestionButton, setShowNextQuestionButton] = useState(false);
  const [endQuiz, setEndQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [buttons, setButtons] = useState({});
  const [buttonClasses, setButtonClasses] = useState({});
  const [correct, setCorrect] = useState([]);
  const [incorrect, setIncorrect] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [filteredValue, setFilteredValue] = useState('all');
  const [userAttempt, setUserAttempt] = useState(1);
  const [showDefaultResultState, setShowDefaultResult] = useState(true);
  const [answerSelectionTypeState, setAnswerSelectionType] = useState(undefined);

  const [totalPoints, setTotalPoints] = useState(0);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [question, setQuestion] = useState(questions[currentQuestionIndex]);
  const [questionSummary, setQuestionSummary] = useState(undefined);

  useEffect(() => {
    maxQuestion = (maxQuestion < 1 || maxQuestion > questions.length) ? questions.length : maxQuestion;
    questions = questions.slice(0, maxQuestion);
    console.log('Max question: ', questions.length);
  })

  useEffect(() => {
    setShowDefaultResult(showDefaultResult !== undefined ? showDefaultResult : true);
  }, [showDefaultResult]);

  useEffect(() => {
    setQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  useEffect(() => {
    const { correctAnswer } = question;
    // Default single to avoid code breaking due to automatic version upgrade
    setAnswerSelectionType(correctAnswer.length > 1 ? 'multiple' : 'single');
  }, [question, currentQuestionIndex]);

  useEffect(() => {
    if (endQuiz) {
      let totalPointsTemp = 0;
      let correctPointsTemp = 0;
      for (let i = 0; i < maxQuestion; i++) {
        let point = questions[i].point || 0;
        if (typeof point === 'string' || point instanceof String) {
          point = parseInt(point)
        }

        totalPointsTemp = totalPointsTemp + point;

        if (correct.includes(i)) {
          correctPointsTemp = correctPointsTemp + point
        }
      }
      setTotalPoints(totalPointsTemp);
      setCorrectPoints(correctPointsTemp);
    }
  }, [endQuiz]);

  useEffect(() => {
    setQuestionSummary({
      numberOfQuestions: maxQuestion,
      numberOfCorrectAnswers: correct.length,
      numberOfIncorrectAnswers: incorrect.length,
      questions: questions,
      userInput: userInput,
      totalPoints: totalPoints,
      correctPoints: correctPoints
    })
  }, [totalPoints, correctPoints]);

  useEffect(() => {
    if (endQuiz && onComplete !== undefined && questionSummary !== undefined) {
      onComplete(questionSummary)
    }
  }, [endQuiz, questionSummary]);

  const nextQuestion = (currentQuestionIndex) => {
    setIncorrectAnswer(false);
    setCorrectAnswer(false);
    setShowNextQuestionButton(false);
    setButtons({});

    if (currentQuestionIndex + 1 == maxQuestion) {
      setEndQuiz(true)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  };

  const handleChange = (event) => {
    setFilteredValue(event.target.value)
  };

  const renderAnswerInResult = (question, userInputIndex) => {
    const { answers, correctAnswer, questionType } = question;
    let answerBtnCorrectClassName;
    let answerBtnIncorrectClassName;
    const answerSelectionType = correctAnswer.length > 1 ? 'multiple' : 'single';


    return answers.map((answer, index) => {
      answerBtnCorrectClassName = (correctAnswer.includes(index + 1) ? 'correct' : '');
      answerBtnIncorrectClassName = (!correctAnswer.includes(index + 1) && userInputIndex.includes(index + 1) ? 'incorrect' : '');

      return (
        <div key={index}>
          <button disabled={true}
            className={"answerBtn btn " + answerBtnCorrectClassName + answerBtnIncorrectClassName}>
            <span>{answer}</span>
          </button>
        </div>
      )
    });
  };

  const renderQuizResultQuestions = useCallback(() => {
    let filteredQuestions;
    let filteredUserInput;

    if (filteredValue !== 'all') {
      if (filteredValue === 'correct') {
        filteredQuestions = questions.filter((question, index) => correct.indexOf(index) !== -1);
        filteredUserInput = userInput.filter((input, index) => correct.indexOf(index) !== -1)
      } else {
        filteredQuestions = questions.filter((question, index) => incorrect.indexOf(index) !== -1);
        filteredUserInput = userInput.filter((input, index) => incorrect.indexOf(index) !== -1)
      }
    }

    return (filteredQuestions ? filteredQuestions : questions).map((question, index) => {
      if (index >= maxQuestion) {
        return;
      }
      const userInputIndex = filteredUserInput ? filteredUserInput[index] : userInput[index];

      const answerSelectionType = question.correctAnswer.length > 1 ? 'multiple' : 'single';

      return (
        <div className="result-answer-wrapper" key={index + 1}>
          <h3 dangerouslySetInnerHTML={rawMarkup(`Q${question.questionIndex}: ${question.question}`)} />
          {question.questionPic && <img src={question.questionPic} alt="image" />}
          {renderTags(answerSelectionType, question.correctAnswer.length, question.segment)}
          <div className="result-answer">
            {renderAnswerInResult(question, userInputIndex)}
          </div>
          <Explanation question={question} isResultPage={true} />
        </div>
      )
    })
  }, [endQuiz, filteredValue]);

  const renderAnswers = (question, buttons) => {
    const { answers, correctAnswer, questionType } = question;
    const answerSelectionType = question.correctAnswer.length > 1 ? 'multiple' : 'single';
    const onClickAnswer = index => checkAnswer(index + 1, correctAnswer, answerSelectionType, {
      userInput,
      userAttempt,
      currentQuestionIndex,
      continueTillCorrect,
      showNextQuestionButton,
      incorrect,
      correct,
      setButtons,
      setCorrectAnswer,
      setIncorrectAnswer,
      setCorrect,
      setIncorrect,
      setShowNextQuestionButton,
      setUserInput,
      setUserAttempt
    });

    return answers.map((answer, index) =>
      <Fragment key={index}>
        {(buttons[index] !== undefined)
          ? (<button
            disabled={buttons[index].disabled || false}
            className={`${buttons[index].className} answerBtn btn`}
            onClick={() => onClickAnswer(index, correctAnswer, answerSelectionType)}
          >
            <span>{String.fromCharCode(65 + index) + `.\t`} {answer}</span>
          </button>)
          : <button
            onClick={() => onClickAnswer(index, correctAnswer, answerSelectionType)}
            className="answerBtn btn"
          >{String.fromCharCode(65 + index) + `.\t`} {answer}
          </button>
        }
      </Fragment>
    )
  };

  const renderTags = (answerSelectionType, numberOfSelection, segment) => {
    const {
      singleSelectionTagText,
      multipleSelectionTagText,
      pickNumberOfSelection
    } = appLocale;

    return (
      <div className="tag-container">
        {/* {answerSelectionType === 'single' &&
          <span className="single selection-tag">{singleSelectionTagText}</span>
        } */}
        {answerSelectionType === 'multiple' &&
          <span className="multiple selection-tag">{multipleSelectionTagText}</span>}
        {/* <span className="number-of-selection">
          {pickNumberOfSelection.replace("<numberOfSelection>", numberOfSelection)}
        </span>
        {segment && <span className="selection-tag segment">{segment}</span>} */}
      </div>
    )
  };

  const renderResult = () => (
    <div className="card-body">
      <h2>
        {appLocale.resultPageHeaderText.replace("<correctIndexLength>", correct.length).replace("<questionLength>", maxQuestion)}
      </h2>
      <h2>
        {appLocale.resultPagePoint.replace("<correctPoints>", correctPoints).replace("<totalPoints>", totalPoints)}
      </h2>
      <br />
      <QuizResultFilter
        filteredValue={filteredValue}
        handleChange={handleChange}
        appLocale={appLocale}
      />
      {renderQuizResultQuestions()}
    </div>
  );

  return (
    <div className="questionWrapper">
      <div>
        <button onClick={() => homePage()} className="nextQuestionBtn btn">
          Home
        </button>
      </div>
      <Timer duration={duration} />
      {!endQuiz &&
        <div className={`questionWrapperBody ${question.correctAnswer.length > 1 ? 'multi' : ''}`}>
          <div>{appLocale.question} {currentQuestionIndex + 1}:</div>
          <div dangerouslySetInnerHTML={rawMarkup(question && question.question)} />
          {/* {question && question.questionPic && <img src={question.questionPic} alt="image" />} */}
          {question && renderTags(answerSelectionTypeState, question.correctAnswer.length, question.segment)}
          {question && renderAnswers(question, buttons)}
          {showNextQuestionButton &&
            <div>
              <button onClick={() => nextQuestion(currentQuestionIndex)} className="nextQuestionBtn btn">
                {appLocale.nextQuestionBtn}
              </button>
            </div>
          }
          <div className="questionModal">
            <InstantFeedback
              question={question}
              showInstantFeedback={showInstantFeedback}
              correctAnswer={correctAnswer}
              incorrectAnswer={incorrectAnswer}
            />
          </div>
        </div>
      }
      {endQuiz && showDefaultResultState && customResultPage === undefined &&
        renderResult()
      }
      {endQuiz && !showDefaultResultState && customResultPage !== undefined &&
        customResultPage(questionSummary)
      }
    </div>
  );
};

Core.propTypes = {
  questions: PropTypes.array,
  showDefaultResult: PropTypes.bool,
  onComplete: PropTypes.func,
  customResultPage: PropTypes.func,
  showInstantFeedback: PropTypes.bool,
  continueTillCorrect: PropTypes.bool,
  appLocale: PropTypes.object,
  homePage: PropTypes.func
};

export default Core;
