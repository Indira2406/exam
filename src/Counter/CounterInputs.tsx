import React, { ChangeEvent } from "react";

import "./Counter.css";

type CounterInputsType = {
  onChangeStartCount: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeMaxCount: (e: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  maxValue: number;
  startValue: number;
};
export function CounterInputs(props: CounterInputsType) {
  return (
    <div className="counter__inputs">
      <input
        type="number"
        value={props.startValue}
        onChange={props.onChangeStartCount}
        className={`counter__input  ${props.error ? "input_error" : ""}`}
      />
      <input
        type="number"
        value={props.maxValue}
        onChange={props.onChangeMaxCount}
        className={`counter__input  ${props.error ? "input_error" : ""}`}
      />
      {props.error && (
        <div className="counter__error">
          Ошибка! Начальное число не может быть равным или больше максимального
        </div>
      )}
    </div>
  );
}
