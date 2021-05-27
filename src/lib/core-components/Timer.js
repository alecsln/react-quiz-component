import React, { useState, useEffect, useCallback, Fragment } from "react";

const Timer = ({ duration }) => {
  const [timespan, setTimespan] = useState(duration);
  const [timeup, setTimeup] = useState(false);
  const [rush, setRush] = useState(false);
  useEffect(() => {
    const countdown = setTimeout(() => {
      if (!timeup) {
        setTimespan(timespan - 1);
      }
    }, 1000);

    return () => clearTimeout(countdown);
  });

  useEffect(() => {
    setTimeup(timespan <= 0)
  });

  useEffect(() => {
    setRush(!timeup && timespan < 60);
  });

  const display = () => {
    let minutes = ~~(timespan / 60);
    let seconds = ~~(timespan % 60);
    return minutes + ':' + seconds;
  }

  return (
    <div className={`timer ${rush ? 'rush' : ''} ${timeup ? 'timeup' : ''}`}>
      {!timeup && display()}
      {timeup && <div>Timeout!</div>}
    </div>)
}

export default Timer;
