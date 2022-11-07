import React from "react";
import { CounterContent } from "./CounterContent";
import { CounterButtons } from "./CounterButtons";

import "./Counter.css";

type CounterPropsType = {
  maxValue: number;
  countInc: () => void;
  countReset: () => void;
  count: number;
  startValue: number;
  backtoValues: () => void;
};
export function Counter(props: CounterPropsType) {
  return (
    <div className="counter">
      <CounterContent count={props.count} maxValue={props.maxValue} />
      <CounterButtons
        countInc={props.countInc}
        countReset={props.countReset}
        count={props.count}
        MAXVALUE={props.maxValue}
        STARTVALUE={props.startValue}
        backtoValues={props.backtoValues}
      />
    </div>
  );
}
