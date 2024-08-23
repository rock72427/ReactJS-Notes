import React, { useEffect, useState } from "react";

const Example5 = () => {
  const [millisecond, setMillisecond] = useState(0);
  const [start, setStart] = useState(false);
  let interval;

  useEffect(() => {
    if (start) {
      interval = setInterval(() => {
        setMillisecond((prev) => prev + 10);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start]);

  const ms = Math.trunc(millisecond % 1000);
  const sec = Math.trunc((millisecond / 1000) % 60);
  const min = Math.trunc((millisecond / 1000 / 60) % 60);

  const reset = () => {
    setStart(false);
    setMillisecond(0);
  };

  const time = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <div className="display">
        <h1>
          <span>{time(min)}</span> :<span>{time(sec)}</span> :
          <span>{time(ms / 10)}</span>
        </h1>
      </div>
      <div className="buttons">
        <button className="btn btn-success" onClick={() => setStart(true)}>
          Start
        </button>
        <button className="btn btn-danger" onClick={() => setStart(false)}>
          Stop
        </button>
        <button className="btn btn-warning" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Example5;
