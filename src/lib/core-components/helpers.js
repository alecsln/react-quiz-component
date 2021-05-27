import marked from 'marked';
import dompurify from 'dompurify';

export const rawMarkup = (data) => {
  const sanitizer = dompurify.sanitize;
  let rawMarkup = marked(sanitizer(data));
  return { __html: rawMarkup };
};

export const checkAnswer = (index, correctAnswer, answerSelectionType, {
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
}) => {
  const indexStr = `${index}`;
  const disabledAll = {
    0: { disabled: true },
    1: { disabled: true },
    2: { disabled: true },
    3: { disabled: true },
    4: { disabled: true },
    5: { disabled: true }
  };
  let maxNumberOfMultipleSelection = correctAnswer.length;

  if (userInput[currentQuestionIndex] === undefined) {
    userInput[currentQuestionIndex] = []
  }

  userInput[currentQuestionIndex].push(index);
  if (correctAnswer.includes(index)) {
    setButtons((prevState) => ({
      ...prevState,
      [index - 1]: {
        disabled: !prevState[index - 1],
        className: (correctAnswer.includes(index)) ? "correct" : "incorrect"
      },
    })
    )
  } else {
    setButtons((prevState) => ({
      ...prevState,
      [index - 1]: {
        className: (correctAnswer.includes(index)) ? "correct" : "incorrect"
      },
    })
    )
  }

  let cnt = 0;
  for (let i = 0; i < correctAnswer.length; i++) {
    if (userInput[currentQuestionIndex].includes(correctAnswer[i])) {
      cnt++;
    }
  }
  if (cnt === maxNumberOfMultipleSelection) {
    correct.push(currentQuestionIndex);
    setCorrectAnswer(true);
    setIncorrectAnswer(false);
    setCorrect(correct);
    setShowNextQuestionButton(true);
    setUserAttempt(1)
  } else {
    incorrect.push(currentQuestionIndex);
    setIncorrectAnswer(true);
    setCorrectAnswer(false);
    setIncorrect(incorrect);
    setShowNextQuestionButton(true);
    setUserAttempt(1)
  }
  if (!showNextQuestionButton) {
    setUserInput(userInput);
    setUserAttempt(userAttempt + 1)
  }
};