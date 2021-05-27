import React from "react";
import Explanation from "./Explanation";

const InstantFeedback = ({ showInstantFeedback, incorrectAnswer, correctAnswer, question }) => {

  const renderMessageForCorrectAnswer = (question) => {
    const defaultMessage = 'Đúng';
    return question.messageForCorrectAnswer || defaultMessage;
  };

  const renderMessageForIncorrectAnswer = (question) => {
    const defaultMessage = 'Sai';
    return question.messageForIncorrectAnswer || defaultMessage;
  };


  return (
    <>
      {incorrectAnswer && showInstantFeedback &&
        <div className="alert incorrect">{renderMessageForIncorrectAnswer(question)}</div>
      }
      {correctAnswer && showInstantFeedback &&
        <div className="alert correct">
          {renderMessageForCorrectAnswer(question)}
          <Explanation question={question} isResultPage={false} />
        </div>
      }
    </>)
}

export default InstantFeedback;
