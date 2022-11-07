import React, { useRef, useState } from "react";
import "./App.css";
import { Counter } from "./Counter/Counter";
import { InitialValues } from "./InitialValues/InitialValues";

function App() {
  const STEP = 1;
  let [startValue, setStartValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);
  const [error, setError] = useState(false);
  let [count, setCount] = useState(startValue);
  let [counterVisible, setCounterVisible] = useState(false);

  function countInc() {
    if (count >= startValue && count < maxValue) {
      setCount(count + STEP);
    }
  }

  function countReset() {
    if (count !== startValue) {
      setCount(startValue);
    }
  }

  const startValueInputRef =
    useRef() as React.MutableRefObject<HTMLInputElement>;
  const maxValueInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onClickSetButton = () => {
    const newStartValue = +startValueInputRef.current.value;
    const newMaxValue = +maxValueInputRef.current.value;
    const isError = newStartValue >= newMaxValue;
    setMaxValue(newMaxValue);
    setStartValue(newStartValue);
    setCount(newStartValue);
    setError(isError);
    setCounterVisible(!isError);
  };

  const backtoValues = () => {
    setCounterVisible(false)
  }
  return (
    <div className="App">
      {!counterVisible ? (
        <InitialValues
          startValueInputRef={startValueInputRef}
          maxValueInputRef={maxValueInputRef}
          error={error}
          maxValue={maxValue}
          startValue={startValue}
          onClickSetButton={onClickSetButton}
        />
      ) : (
        <Counter
          maxValue={maxValue}
          countInc={countInc}
          countReset={countReset}
          count={count}
          startValue={startValue}
          backtoValues={backtoValues}
        />
      )}
    </div>
  );
}

export default App;
